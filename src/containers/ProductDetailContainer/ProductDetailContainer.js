import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { find, findIndex } from 'lodash';

import { ProductDetail } from '@/components';
import { AddToCart } from '@/redux/actions/navigateActions';

const ProductDetailContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems);
  const [product, setProduct] = useState(null);
  const { query } = router;
  const { id } = query;

  const getProduct = async p => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${p}`);
    const beer = await response.json();
    if (beer?.error) {
      setProduct(null);
    } else {
      setProduct(beer[0]);
    }
  };

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  const handleAddProduct = e => {
    const { id, quantity } = e;
    const getProduct = find(cartItems, { id });
    if (getProduct) {
      const totalProducts = cartItems;
      const getIndex = findIndex(totalProducts, { id: getProduct.id });
      totalProducts[getIndex]['quantity'] =
        totalProducts[getIndex]['quantity'] + quantity;
      dispatch(AddToCart(totalProducts));
    } else {
      dispatch(AddToCart([...cartItems, e]));
    }
  };
  return (
    product && <ProductDetail detail={product} handleAdd={handleAddProduct} />
  );
  // return <div>detail container page</div>;
};

export default ProductDetailContainer;
