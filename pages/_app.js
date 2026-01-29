import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <div className="flex min-h-screen flex-col">
        <Component {...Component.layout || (({ children }) => children)} {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
