import 'styles/globals.css'

import Layout from 'components/layout'
import Hero from 'components/hero'

function MyApp({Component, pageProps}){
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp