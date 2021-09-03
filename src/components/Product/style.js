import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  product: {
    padding: theme.spacing(5, 4, 6, 4),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    transition: 'transform .15s linear',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.025)'
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(6)
    }
  },
  productTitle: {
    fontSize: 24,
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase',
    [theme.breakpoints.up('md')]: {
      maxWidth: 180
    }
  },
  productTriangle: {
    width: 60,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    margin: '0 auto',
    [theme.breakpoints.up('lg')]: {
      width: 80
    }
  },
  productImage: {
    width: '100%',
    maxWidth: 180,
    objectFit: 'contain',
    height: 246,
    [theme.breakpoints.up('md')]: {
      maxWidth: 220
    }
  },
  priceBox: {
    marginTop: theme.spacing(2.5),
    textAlign: 'center'
  },
  price: {
    color: theme.palette.button.main,
    fontWeight: 'bold'
  },
  abv: {}
}));
