import React from 'react';
import PropTypes from 'prop-types';
import { round } from 'lodash';
import { useRouter } from 'next/router';
import { Typography } from '@material-ui/core';

import { QuantityManager } from '@/components';
import { useStyles } from './style';
const ProductCart = ({ product }) => {
  const { id, name, target_og, method, image_url, quantity } = product;
  const router = useRouter();
  const classes = useStyles();

  const handleQuantity = e => {
    console.log('handle quantity');
  };
  return (
    <div className={classes.root}>
      <div className={classes.detail}>
        <div className={classes.detailImage}>
          <img className={classes.image} src={image_url} />
        </div>
        <div className={classes.detailContent}>
          <Typography
            variant="h4"
            className={classes.name}
            onClick={() =>
              router.push({ pathname: 'product-detail', query: { id } })
            }
          >
            {name}
          </Typography>
          <Typography
            variant="h5"
            className={classes.price}
          >{`$ ${target_og}`}</Typography>
          <Typography>{method.fermentation.temp.value}</Typography>
        </div>
      </div>
      <div className={classes.counterTotal}>
        <QuantityManager
          onChange={handleQuantity}
          className={classes.quantityManager}
          value={quantity}
        />
        <Typography variant="h5" className={classes.total}>
          {`$ ${round(target_og * quantity, 2)}`}
        </Typography>
      </div>
    </div>
  );
};

ProductCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    abv: PropTypes.number,
    image_url: PropTypes.string,
    target_og: PropTypes.number,
    name: PropTypes.string,
    attenuation_level: PropTypes.number,
    tagline: PropTypes.string,
    method: PropTypes.object,
    quantity: PropTypes.number
  })
};

ProductCart.defaultProps = {
  product: {
    id: 1,
    abv: 0.5,
    image_url: 'https://images.punkapi.com/v2/keg.png',
    target_og: 1010,
    name: 'Buzz',
    attenuation_level: 76,
    tagline: "You Know You Shouldn't",
    method: {
      fermentation: 40
    }
  }
};

export default ProductCart;
