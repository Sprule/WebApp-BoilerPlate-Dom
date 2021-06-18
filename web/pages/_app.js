import Axios from 'axios';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout/Layout';
import materialTheme from '../material-ui/materialTheme';
import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

// Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

Axios.defaults.baseURL = process.env.API_URL;

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={materialTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default MyApp;
