import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { map } from 'lodash';
import { Grid, useMediaQuery } from '@material-ui/core';

import { Product } from '@/components';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4)
  }
}));

const ProductsContainer = () => {
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const getBeers = await response.json();
    if (getBeers?.error) {
      setProducts(null);
    } else {
      setProducts(getBeers);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleClickProduct = id =>
    router.push({ pathname: '/product-detail/', query: { id } });

  return (
    <Grid container spacing={isMd ? 5 : 3} className={classes.container}>
      {products &&
        map(products, ({ abv, name, id, image_url, target_og }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Product
              id={id}
              handleClick={handleClickProduct}
              abv={abv}
              title={name}
              image={image_url}
              price={target_og}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductsContainer;
