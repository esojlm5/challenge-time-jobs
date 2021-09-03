import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ButtonGeneral = ({ children, ...props }) => {
  const BootstrapButton = withStyles(theme => ({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: theme.spacing(1.5, 2.5),
      borderRadius: 0,
      border: '1px solid transparent',
      lineHeight: 1.5,
      backgroundColor: theme.palette.button.main,
      color: '#fff',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      '&:hover': {
        backgroundColor: '#fff',
        color: theme.palette.button.main,
        boxShadow: 'none',
        borderColor: theme.palette.button.main
      },
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(1.5, 5)
      }
    }
  }))(Button);
  return <BootstrapButton {...props}>{children}</BootstrapButton>;
};

ButtonGeneral.propTypes = {
  children: PropTypes.node
};

export default ButtonGeneral;
