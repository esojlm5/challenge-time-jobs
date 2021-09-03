import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { Hidden, Typography, Paper } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './style';
import { QuantityManager } from '@/components';

const ProductDetail = ({ detail, handleAdd }) => {
  const {
    attenuation_level,
    abv,
    name,
    tagline,
    target_og,
    method,
    contributed_by,
    image_url,
    first_brewed
  } = detail;
  const [quantity, setQuantity] = useState(1);
  const classes = useStyles();

  const contentList = [
    {
      attenuation: attenuation_level
    },
    {
      abv
    },
    {
      year: first_brewed
    },
    {
      fermentation: method.fermentation.temp.value
    },
    { contributed: contributed_by }
  ];

  const handleQuantity = e => setQuantity(e);

  const handleTotalProduct = () => {
    handleAdd({
      ...detail,
      quantity
    });
  };

  return (
    <div className={classes.containerDetail}>
      <div className={classes.leftDetail}>
        <Typography className={classes.titleDetail} variant="h4">
          {name}
        </Typography>
        <Typography>{tagline}</Typography>
        <Hidden mdUp>
          <img className={classes.imageDetail} src={image_url} alt={name} />
        </Hidden>
        {/* <div className={classes.attenuation}>{attenuation_level}</div> */}
        <div className={classes.content}>
          {map(contentList, (item, index) => {
            const itemValues = Object.entries(item)[0];
            return (
              <div className={classes.contentItem} key={index}>
                <Typography className={classes.contentText}>
                  {itemValues[0]}
                </Typography>
                <Typography
                  className={clsx([classes.contentValues, classes.contentText])}
                >
                  {itemValues[1]}
                </Typography>
              </div>
            );
          })}
        </div>
        <Paper square className={classes.priceBox}>
          <Typography className={classes.price}>{`$ ${target_og}`}</Typography>
          <QuantityManager
            onChange={handleQuantity}
            handleAdd={handleTotalProduct}
            className={classes.quantityManager}
            withCart
            value={quantity}
          />
        </Paper>
      </div>
      <Hidden smDown>
        <div className={classes.rightDetail}>
          <img className={classes.imageDetail} src={image_url} alt={name} />
        </div>
      </Hidden>
    </div>
  );
};

ProductDetail.propTypes = {
  detail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    abv: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    target_og: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    attenuation_level: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    contributed_by: PropTypes.string.isRequired,
    first_brewed: PropTypes.string.isRequired,
    method: PropTypes.object.isRequired
  }),
  handleAdd: PropTypes.func
};

ProductDetail.defaultProps = {
  detail: {
    id: 1,
    abv: 0.5,
    image_url: 'https://images.punkapi.com/v2/keg.png',
    target_og: 1010,
    name: 'Buzz',
    attenuation_level: 76,
    tagline: "You Know You Shouldn't"
  }
};

export default ProductDetail;
