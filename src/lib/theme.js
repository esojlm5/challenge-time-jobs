import { createTheme } from '@material-ui/core/styles';
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Nunito',
    fontFamilySerif: ['DM Serif Display', 'serif'],
    fontFamilyQuickSand: ['Quicksand', 'sans-serif']
  },
  transitions: {
    main: 'all .25s linear'
  },
  palette: {
    button: {
      main: '#933352',
      cart: '#A02B4F'
    },
    primary: {
      main: '#8263FF',
      dark: '#2B2A5C',
      light: '#E1E2FF',
      purple: '#8875FF',
      purpleHover: '#704CFF'
    },
    secondary: {
      main: '#69BDFF',
      light: '#B7DFFF'
    },
    greys: {
      main: '#4E567D',
      light: '#F3F4FE',
      dark: '#61608D',
      darkSecondary: '#E7E9F4'
    },
    teal: {
      main: '#8DDCA4',
      light: '#B5EDC5'
    },
    background: {
      default: '#fff'
    },
    error: {
      light: '#FFEAEA',
      main: '#FC4E55'
    }
  },
  shape: {
    borderRadius: 24
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {}
      }
    }
  }
});

export default theme;
