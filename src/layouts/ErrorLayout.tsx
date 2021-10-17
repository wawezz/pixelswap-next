import React from 'react'
import { Layout } from 'antd'
import { ILayoutBaseProps } from '@/interfaces/jsx.interface'
import { Logo } from '@/components'

const { Content } = Layout

export interface IProps extends ILayoutBaseProps {
  disableHeader?: boolean
  disableFooter?: boolean
}

export const ErrorLayout: React.FC<IProps> = (props): JSX.Element => {
  return (
    <Layout className="flex-1">
      <Content className="p-5 sm:p-12">
        <Logo />
        <props.mainComp router={props.routeProps} pageProps={props.pageProps} />
      </Content>
    </Layout>
  )
}
