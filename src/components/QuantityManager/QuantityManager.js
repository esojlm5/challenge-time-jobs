import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconButton, Typography, Box } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {
  AddRounded as IconAdd,
  RemoveRounded as IconRemove
} from '@material-ui/icons';

import { useStyles } from './style';

const QuantityManager = ({
  className,
  value,
  min,
  max,
  hasBin,
  onChange,
  fullWidth,
  variant,
  isDisabled,
  withCart,
  handleAdd
}) => {
  const classes = useStyles({ withCart });

  const handleChange = val => {
    const newValue = value + val;

    if (!isDisabled && newValue >= min && newValue <= max) {
      onChange(newValue, val === 1);
    }
  };

  return (
    <div
      className={clsx(
        classes.root,
        classes[variant],
        { [classes.fullWidth]: fullWidth },
        className
      )}
    >
      <IconButton
        color="secondary"
        size="small"
        disabled={value === min || isDisabled}
        onClick={() => handleChange(-1)}
      >
        <IconRemove className={classes.icon} />
      </IconButton>
      <Typography component="span" variant="body1">
        <Box fontSize={14}>{value}</Box>
      </Typography>
      <IconButton
        style={{ opacity: isDisabled ? 0.5 : 1 }}
        color="secondary"
        size="small"
        disabled={value >= max || isDisabled}
        onClick={() => handleChange(1)}
      >
        <IconAdd className={classes.icon} />
      </IconButton>
      {withCart && (
        <div className={classes.cart} onClick={() => handleAdd()}>
          <ShoppingCartIcon className={classes.iconCart} />
        </div>
      )}
    </div>
  );
};

QuantityManager.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  hasBin: PropTypes.bool,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['rounded', 'square', 'circle']),
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  withCart: PropTypes.bool,
  handleAdd: PropTypes.func
};

QuantityManager.defaultProps = {
  value: 1,
  min: 1,
  max: 99,
  hasBin: false,
  fullWidth: false,
  variant: 'rounded',
  isDisabled: false,
  withCart: false
};

export default QuantityManager;
