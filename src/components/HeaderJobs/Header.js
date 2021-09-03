import React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {
  Button,
  Hidden,
  List,
  ListItem,
  ListItemIcon
} from '@material-ui/core';

import { ButtonGeneral, ContainerCustom } from '@/components';
import { useStyles } from './style';

const HeaderJobs = () => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <ContainerCustom className={classes.headerContainer}>
        <List className={clsx(classes.socialList, classes.headerItem)}>
          <ListItem>
            <ListItemIcon className={classes.socialListIcon}>
              <InstagramIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.socialListIcon}>
              <FacebookIcon />
            </ListItemIcon>
          </ListItem>
        </List>
        <img
          className={clsx([classes.headerLogo])}
          src="assets/images/logo-venta.png"
        />
        <div className={clsx([classes.headerItem, classes.cart])}>
          <Hidden xsDown>
            <ButtonGeneral className={classes.signIn}>Sign In</ButtonGeneral>
          </Hidden>
          <Button
            className={classes.buttonCart}
            disableRipple
            onClick={() => router.push('cart')}
          >
            <ShoppingCartIcon className={classes.iconCart} />
          </Button>
        </div>
      </ContainerCustom>
    </div>
  );
};

export default HeaderJobs;
