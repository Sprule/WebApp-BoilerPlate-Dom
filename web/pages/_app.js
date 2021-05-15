import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

Axios.defaults.baseURL = process.env.API_URL

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
