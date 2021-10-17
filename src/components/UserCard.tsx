/* eslint-disable @next/next/no-img-element */
import { Avatar, Button, Progress } from 'antd'
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { DownOutlined } from '@ant-design/icons'

export const UserCard = (): JSX.Element => {
  return (
    <div>
      <div className="flex items-center justify-between mb-7">
        <Avatar shape="square" size={54} className="mr-2" icon={<img alt="avatar" src="/img/avatar.png" />} />
        <div className="flex flex-col">
          <div className="flex items-center">
            <span>Anonymous Shark</span>
            <DownOutlined className="ml-1 text-sm" />
          </div>
          <Progress percent={20} strokeLinecap="square" size="small" showInfo={false} />
          <div className="flex items-center justify-between text-xs font-light">
            <span>Level 5</span> <span>1000 / 5000</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button type="primary" icon={<ExtensionOutlinedIcon className="mr-1" />} size="small" className="flex items-center">
          Quests
        </Button>
        <Button type="primary" icon={<StarBorderOutlinedIcon className="mr-1" />} size="small" className="flex items-center">
          Rewards
        </Button>
      </div>
    </div>
  )
}
