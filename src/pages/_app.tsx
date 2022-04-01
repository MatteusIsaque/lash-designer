import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-TNV6LVM'
    }

    TagManager.initialize(tagManagerArgs)

  }, [])


  return <Component {...pageProps} />
}

export default MyApp
