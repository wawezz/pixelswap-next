import { Router } from 'next/router'
import { ILayout } from '@/interfaces/jsx.interface'
import { HelmetProvider } from 'react-helmet-async'
import { DefaultLayout } from '@/layouts'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import 'tailwindcss/tailwind.css'
require('@/styles/global.less')

export interface ICustomApp {
  Component: React.FC & {
    getLayout: any
  }
  pageProps: {
    layout?: ILayout
    name?: string
  }
  routeProps: Router
  err?: Error
}

function getLibrary(provider: any) {
  return new Web3(provider)
}

export default function CustomApp(props: ICustomApp): JSX.Element {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <HelmetProvider>
        <DefaultLayout mainComp={props.Component} routeProps={props.routeProps} pageProps={props.pageProps} />
      </HelmetProvider>
    </Web3ReactProvider>
  )
}
