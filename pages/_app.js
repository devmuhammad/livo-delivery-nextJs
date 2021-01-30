import React, {Fragment, useEffect} from 'react';
import Head from 'next/head'
import { Global } from '@emotion/react'
import xw from 'xwind'
import LoadingBar from 'react-redux-loading-bar'

// import '../src/styles/pagestyles.css'
import '../src/styles/base.css'


export default function App ({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>LIVO Delivery</title>
      </Head>
      <Global
        //keyframes + ring and shadow classes variables  ... to global styles
        styles={xw`XWIND_GLOBAL`}
      />
      <div suppressHydrationWarning>
      {/* <LoadingBar /> */}
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
      </div>
    </>
  )
}

// export default withRouter(App);
