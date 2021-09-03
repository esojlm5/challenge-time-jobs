import { makeStyles } from '@material-ui/styles';

// button #8B3658
export const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: '#F9F8F6',
    padding: theme.spacing(1.5, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 0)
      // alignItems: 'flex-start'
    }
  },
  headerContainer: {
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr'
  },
  socialListIcon: {
    minWidth: 'auto',
    cursor: 'pointer'
  },
  headerLogo: {
    width: '100%',
    // margin: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      width: 250,
      margin: '0 auto'
    }
  },
  headerItem: {
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      flex: 'auto'
    }
  },
  socialList: {
    display: 'flex',
    fontSize: 12,
    '& li': {
      padding: theme.spacing(1),
      width: 'auto'
    }
  },
  cart: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  buttonCart: {
    minWidth: 'auto',
    border: '1px solid #AD6A84',
    borderRadius: 0,
    backgroundColor: 'transparent !important',
    '&:hover': {
      borderColor: '#8B3658',
      '& svg': {
        color: '#8B3658'
      }
    }
  },
  iconCart: {
    margin: 0,
    cursor: 'pointer',
    color: '#AD6A84'
  },
  signIn: {
    marginRight: theme.spacing(2.5)
  }
}));
