import theme from '@/lib/theme';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
  containerDetail: {
    marginTop: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginTop: theme.spacing(8)
    }
  },
  leftDetail: {
    [theme.breakpoints.up('md')]: {
      flex: 1,
      paddingRight: theme.spacing(7.5)
    }
  },
  rightDetail: {
    [theme.breakpoints.up('md')]: {
      borderRadius: 20,
      backgroundColor: '#F9F8F6',
      flex: 1.5,
      height: 500
    }
  },
  imageDetail: {
    width: '100%',
    objectFit: 'contain',
    height: 246,
    margin: '0 auto',
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      height: 600,
      marginTop: theme.spacing(-3),
      marginLeft: theme.spacing(-3)
    }
  },
  titleDetail: {
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3)
    }
  },
  contentItem: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(7),
      margin: theme.spacing(6, 0)
    }
  },
  contentValues: {
    fontWeight: 'bold'
  },
  contentText: {
    flex: 1
  },
  priceBox: {
    marginTop: theme.spacing(2.5),
    padding: theme.spacing(2.5),
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3)
    }
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20
  },
  quantityManager: {
    marginLeft: theme.spacing(6)
  }
}));
