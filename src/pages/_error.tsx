import { Router } from 'next/router'
import { ILayout } from '@/interfaces/jsx.interface'
import { HelmetProvider } from 'react-helmet-async'
import { ErrorLayout } from '@/layouts'

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

export default function Error(props: ICustomApp): JSX.Element {
  return (
    <HelmetProvider>
      error
      {/* <ErrorLayout mainComp={props.Component} routeProps={props.routeProps} pageProps={props.pageProps} /> */}
    </HelmetProvider>
  )
}
