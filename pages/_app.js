import  'styles/globals.css'
import Layout from 'components/layout'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return(
	 	 <Component {...pageProps} />
	
	)
}

export default MyApp