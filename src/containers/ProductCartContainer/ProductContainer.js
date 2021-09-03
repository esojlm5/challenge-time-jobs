import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { map } from 'lodash';

import { ProductCart } from '@/components';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4)
  }
}));

const ProductContainer = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const products = useSelector(state => state.cartItems);

  console.log(products);
  return (
    products && (
      <div className={classes.root}>
        {map(products, (product, index) => {
          console.log(product);
          return <ProductCart key={index} product={product} />;
        })}
      </div>
    )
  );
};

export default ProductContainer;
