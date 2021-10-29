/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Divider, Input, Layout, Menu, Space, Tooltip } from 'antd'
import styles from '@/styles/exports.module.less'
import { MenuUnfoldOutlined, MenuFoldOutlined, SearchOutlined, AppstoreOutlined } from '@ant-design/icons'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { ILayoutBaseProps } from '@/interfaces/jsx.interface'
import { Logo, menuItems, UserCard } from '@/components'
import { MenuItem } from '@/components/Menu'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import { useWeb3React } from '@web3-react/core'
import { injected } from '@/utils/wallet'

const { Header, Sider, Content } = Layout

export interface IProps extends ILayoutBaseProps {
  disableHeader?: boolean
  disableFooter?: boolean
}

export const DefaultLayout: React.FC<IProps> = (props): JSX.Element => {
  const { active, account, activate, deactivate } = useWeb3React()
  const router = useRouter()
  const screens = useBreakpoint()
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [searchActive, setSearchActive] = useState<boolean>(false)
  const searchRow = useRef<HTMLDivElement>(null)

  const menuWidth = '272px'
  const headerHeight = '64px'

  useEffect(() => {
    if (!searchActive) return

    function handleClick(event: Event) {
      if (searchRow.current && !searchRow.current.contains(event.target as Node)) {
        setSearchActive(false)
      }
    }
    window.addEventListener('click', handleClick)
    // clean up
    return () => window.removeEventListener('click', handleClick)
  }, [searchActive])

  useEffect(() => {
    setCollapsed(!screens.xl)
  }, [screens])

  const toggleDrawer = () => {
    setCollapsed(!collapsed)
  }

  async function connectWallet() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnectWallet() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <Layout id="default-layout" className="min-h-screen flex">
      {!collapsed && !screens.xl && (
        <div
          className="z-20 opacity-50 fixed top-0 left-0 w-full h-screen"
          style={{ backgroundColor: styles['overlay-color'] }}
          onClick={() => {
            setCollapsed(true)
          }}></div>
      )}
      <Sider trigger={null} collapsible collapsed={collapsed} collapsedWidth="0" width={menuWidth} className="z-30 fixed">
        <div className="h-screen	overflow-y-scroll">
          <div className="mt-4 mb-6">
            <Logo />
          </div>
          <div className="my-4 mx-5">
            <UserCard />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[menuItems.flat(1).find((MenuItem: MenuItem) => MenuItem.to === router.pathname)?.key || '']}
            className="py-2">
            {menuItems.map((itemArr: MenuItem[], i: number) => (
              <Menu.ItemGroup key={`m-g-${i}`} className="mx-5" title={null}>
                {itemArr.map((item: MenuItem) => (
                  <Menu.Item
                    key={item.key}
                    icon={item.icon}
                    className="my-1 px-4"
                    style={{ borderRadius: styles['border-radius-base'] }}
                    onClick={() => {
                      router.push(item.to)
                    }}>
                    <span>{item.title}</span>
                    {item.mark && (
                      <span className="text-xs py-1 px-2 ml-1 rounded-lg" style={{ backgroundColor: styles['secondary-color'] }}>
                        {item.mark}
                      </span>
                    )}
                  </Menu.Item>
                ))}
                <Menu.Divider className="my-3" style={{ backgroundColor: styles['divider-color'] }} />
              </Menu.ItemGroup>
            ))}
          </Menu>
        </div>
        <Divider
          type="vertical"
          orientation="right"
          className="absolute top-0 right-0 h-full m-0"
          style={{ backgroundColor: styles['divider-color'] }}
        />
      </Sider>
      <Layout className="flex-1">
        <Header
          className="fixed z-10 flex items-center justify-between px-4 py-1 border-solid border-b"
          style={{
            height: headerHeight,
            top: 0,
            right: 0,
            borderColor: styles['divider-color'],
            left: !collapsed && screens.xl ? menuWidth : 0
          }}>
          <Button
            type="ghost"
            shape="circle"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleDrawer}
            size="large"
            className="border-none btn-header-circle"
          />
          <Space size="small">
            <div className="flex items-center" ref={searchRow}>
              <Button
                type="ghost"
                shape="circle"
                icon={<SearchOutlined />}
                size="large"
                onClick={() => {
                  if (searchActive) {
                    console.log('text')
                  } else {
                    setSearchActive(true)
                  }
                }}
                className={`border-none btn-header-circle z-10 transition-colors duration-300 ${searchActive ? '-mr-10' : ''}`}
              />
              {searchActive && <Input style={{ backgroundColor: styles['divider-color'] }} className="rounded-2xl h-8 pl-11" />}
            </div>
            <Button type="ghost" shape="circle" icon={<AppstoreOutlined />} size="large" className="border-none btn-header-circle" />
            {(!searchActive || (searchActive && screens.md)) && (
              <>
                <Button
                  type="primary"
                  shape="round"
                  icon={<img alt="pixelswap-icon" src="/img/pixel-icon.png" className="mr-0 mt-2 sm:mr-1" />}
                  size="small"
                  className="flex items-center justify-center leading-none text-xs transition-colors duration-300">
                  $ 0,04
                </Button>
                <Button
                  type="primary"
                  icon={<BookmarkIcon fontSize="small" className="mr-0 sm:mr-1" />}
                  size="small"
                  shape={screens.sm ? 'round' : 'circle'}
                  className="flex items-center justify-center leading-none text-xs transition-colors duration-300">
                  <div className="hidden sm:block">Airdrop</div>
                </Button>
              </>
            )}
            {active ? (
              <Tooltip title={account}>
                <span>{account?.substring(0, 4) + '...'}</span>
              </Tooltip>
            ) : (
              <Button
                type="primary"
                shape={screens.sm ? 'round' : 'circle'}
                icon={<AccountBalanceWalletIcon fontSize="small" className="mr-0 sm:mr-1" />}
                size="small"
                className="flex items-center justify-center leading-none text-xs transition-opacity duration-300 hover:opacity-80"
                style={{ backgroundColor: styles['secondary-color'] }}>
                <div className="hidden sm:block" onClick={active ? disconnectWallet : connectWallet}>
                  Connect Wallet
                </div>
              </Button>
            )}
          </Space>
        </Header>
        <div style={{ padding: `${headerHeight} 0px 0px ${!collapsed && screens.xl ? menuWidth : 0}` }}>
          <Content className="p-5 sm:p-10">
            <props.mainComp router={props.routeProps} pageProps={props.pageProps} />
          </Content>
        </div>
      </Layout>
    </Layout>
  )
}
