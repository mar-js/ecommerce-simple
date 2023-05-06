import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { TemplateApp } from 'UI'

import 'styles/globals.css'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <TemplateApp>
    <Component { ...pageProps } />
  </TemplateApp>
)

export default App
