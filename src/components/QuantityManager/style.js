import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #BAAA8D',
    userSelect: 'none',
    width: 'fit-content',
    borderRadius: theme.shape.borderRadius,
    minWidth: 140,
    padding: 10,
    position: 'relative',
    paddingRight: ({ withCart }) => withCart && theme.spacing(6)
  },
  /* Styles applied to the root element if `variant="circle"`. */
  circle: {
    borderRadius: 100
  },
  /* Styles applied to the root element if `variant="rounded"`. */
  rounded: {},
  /* Styles applied to the root element if `variant="square"`. */
  square: {
    borderRadius: 0
  },
  fullWidth: {
    width: '100%'
  },
  binContainer: {
    padding: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: '100%',
      height: '100%'
    }
  },
  icon: {
    width: 20,
    height: 20,
    color: '#BAAA8D'
  },
  cart: {
    backgroundColor: theme.palette.button.cart,
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    borderRadius: '50%',
    cursor: 'pointer',
    padding: '10px 12px',
    display: 'flex',
    alignItems: 'center'
  },
  iconCart: {
    color: '#fff',
    fontSize: 20
  }
}));
