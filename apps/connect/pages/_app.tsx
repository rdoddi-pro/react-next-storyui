import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg'
require('./styles.less')

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to connect!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to connect!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default CustomApp
