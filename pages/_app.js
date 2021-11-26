import Layout from '../components/Layout'
import '../styles/globals.css'

//we are nesting all content inside a layout component
//this means that we don't have to import the navbar for example on every single page

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
