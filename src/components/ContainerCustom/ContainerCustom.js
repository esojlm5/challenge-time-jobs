import React from 'react';
import PropTypes from 'prop-types';
import { Container as MuiContainer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomContainer = withStyles(theme => ({
  root: {
    padding: theme.spacing(0, 4),
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1152
    }
  }
}))(MuiContainer);

const Container = ({ children, ...props }) => (
  <CustomContainer {...props}>{children}</CustomContainer>
);

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
