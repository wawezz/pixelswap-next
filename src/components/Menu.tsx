import { MenuItemProps } from 'antd'
import DashboardOutlinedIcon from '@mui/icons-material/Dashboard'
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined'
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined'
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined'
import CenterFocusWeakOutlinedIcon from '@mui/icons-material/CenterFocusWeakOutlined'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined'
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

export type MenuItem = MenuItemProps & {
  to: string
  key: string
  mark?: string
}

export const menuItems: MenuItem[][] = [
  [
    {
      icon: <DashboardOutlinedIcon className="mr-6 text-2xl" />,
      title: 'Dashboard',
      to: '/',
      key: 'dashboard'
    },
    {
      icon: <AgricultureOutlinedIcon className="mr-6 text-2xl" />,
      title: 'Farming',
      to: '/farming',
      key: 'farming'
    },
    {
      icon: <SwapHorizOutlinedIcon className="mr-6 text-2xl" />,
      title: 'Swap',
      to: '/swap',
      key: 'swap',
      mark: 'Testnet'
    },
    {
      icon: <FlashOnOutlinedIcon className="mr-6 text-2xl" />,
      title: 'Pixel Exctractor',
      to: '/pixel-exctractor',
      key: 'pixel-exctractor'
    },
    {
      icon: <CenterFocusWeakOutlinedIcon className="mr-6 text-2xl" />,
      title: 'Pixel WARs',
      to: '/pixel-wars',
      key: 'pixel-wars'
    },
    {
      icon: <AppsOutlinedIcon className="mr-6 text-2xl" />,
      title: 'Collection',
      to: '/collection',
      key: 'collection'
    },
    {
      icon: <ShoppingCartOutlinedIcon className="mr-6 text-2xl" />,
      title: 'NFT Market',
      to: '/nft-market',
      key: 'nft-market'
    },
    {
      icon: <StackedBarChartOutlinedIcon className="mr-6 text-2xl" />,
      title: 'NFT stacking',
      to: '/nft-stacking',
      key: 'nft-stacking'
    },
    {
      icon: <LocalGasStationOutlinedIcon className="mr-6 text-2xl" />,
      title: 'Borrow',
      to: '/borrow',
      key: 'borrow'
    },
    {
      icon: <SchoolOutlinedIcon className="mr-6 text-2xl" />,
      title: 'Pixel Education',
      to: '/pixel-education',
      key: 'pixel-education'
    }
  ],
  [
    {
      icon: <InfoOutlinedIcon className="mr-6 text-2xl" />,
      title: 'About',
      to: '/about',
      key: 'about'
    },
    {
      icon: <FolderOpenOutlinedIcon className="mr-6 text-2xl" />,
      title: 'History',
      to: '/history',
      key: 'history'
    },
    {
      icon: <SettingsOutlinedIcon className="mr-6 text-2xl" />,
      title: 'Settings',
      to: '/settings',
      key: 'settings'
    }
  ]
]
