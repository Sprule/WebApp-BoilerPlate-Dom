import { createMuiTheme } from '@material-ui/core/styles';
import theme from '../styles/theme';

// Create a theme instance.
const materialTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: theme.primary,
    },
    secondary: {
      main: '#2C2C2C',
    },
    success: {
      main: '#56D47D',
    },
    error: {
      main: '#FF4160',
    },
  },
  typography: {
    h1: {
      fontSize: 40,
      fontWeight: 500,
    },
    h3: {
      fontSize: 32,
      fontWeight: 500,
    },
    h4: {
      fontSize: 28,
      fontWeight: 500,
    },
    h5: {
      fontSize: 24,
      fontWeight: 500,
    },
    h6: {
      fontSize: 20,
      fontWeight: 500,
    },
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16,
    },
    caption: {
      fontSize: 12,
    },
    button: {
      textTransform: 'none',
    },
  },
  spacing: 8,
});

export default materialTheme;
