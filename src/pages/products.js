import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { ProductsContainer } from '@/containers';

const useStyles = makeStyles(theme => ({
  productContainer: {},
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3)
  }
}));

const Products = () => {
  const classes = useStyles();

  return (
    <div className={classes.productContainer}>
      <Typography className={classes.title} variant="h2" align="center">
        Beers
      </Typography>
      <div className={classes.productWrapper}>
        <ProductsContainer />
      </div>
    </div>
  );
};

export default Products;
