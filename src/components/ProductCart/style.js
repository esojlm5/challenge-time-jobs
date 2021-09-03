import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 4),
    border: '1px solid #d4d4c5',
    marginBottom: theme.spacing(2.4),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2.5, 12),
      display: 'flex'
    }
  },
  detail: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-start'
    }
  },
  name: {
    cursor: 'pointer'
  },
  detailImage: {
    [theme.breakpoints.up('md')]: {
      width: 100
    }
  },
  detailContent: {
    paddingTop: theme.spacing(2),
    marginLeft: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(5)
    }
  },
  price: {
    fontWeight: 'bold',
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(1)
  },
  image: {
    height: 160,
    objectFit: 'contain'
  },
  counterTotal: {
    display: 'flex',
    marginTop: theme.spacing(4),
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      flex: 1,
      paddingLeft: theme.spacing(10)
    }
  },
  total: {
    fontWeight: 'bold',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(5)
    }
  }
}));
