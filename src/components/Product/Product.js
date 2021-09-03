import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';

import { useStyles } from './style';

const Product = ({ abv, title, id, image, price, handleClick }) => {
  const classes = useStyles();
  return (
    <Paper
      square
      className={classes.product}
      elevation={3}
      onClick={() => handleClick(id)}
    >
      <Typography className={classes.productTitle} align="center">
        {title}
      </Typography>
      <img
        className={classes.productTriangle}
        src="assets/images/product-triangle.png"
      />
      <img className={classes.productImage} src={image} />
      <div className={classes.priceBox}>
        <Typography className={classes.price} variant="h5">
          {price}
        </Typography>
        <Typography
          className={classes.abv}
          variant="caption"
        >{`${abv} OZ.`}</Typography>
      </div>
    </Paper>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

Product.defaultProps = {
  abv: 0.5,
  image: 'https://images.punkapi.com/v2/keg.png',
  price: 1010,
  priceDiscount: null,
  title: 'Buzz'
};

export default Product;
