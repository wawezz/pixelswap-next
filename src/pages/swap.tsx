/* eslint-disable @next/next/no-img-element */
import { Button, Card, Col, Row, Tabs, Select, Input, Tooltip } from 'antd'
import styles from '@/styles/exports.module.less'
import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  CloseOutlined,
  ControlOutlined,
  InfoCircleOutlined,
  LinkOutlined,
  QuestionCircleOutlined,
  SmileOutlined,
  SyncOutlined
} from '@ant-design/icons'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import { useState } from 'react'

const { TabPane } = Tabs
const { Option } = Select

const operations = (
  <div className="flex items-center justify-center">
    <Button
      type="primary"
      icon={<SyncOutlined />}
      size="small"
      className="flex items-center justify-center mx-1 border-none transition-opacity duration-300 hover:opacity-80"
      style={{ backgroundColor: styles['gray-bg-color'] }}
    />
    <Button
      type="primary"
      icon={<InfoCircleOutlined />}
      size="small"
      className="flex items-center justify-center mx-1 border-none transition-opacity duration-300 hover:opacity-80"
      style={{ backgroundColor: styles['gray-bg-color'] }}
    />
    <Button
      type="primary"
      icon={<ControlOutlined />}
      size="small"
      className="flex items-center justify-center mx-1 border-none transition-opacity duration-300 hover:opacity-80"
      style={{ backgroundColor: styles['gray-bg-color'] }}
    />
  </div>
)

export default function Swap(): JSX.Element {
  const screens = useBreakpoint()

  const [swapFrom, setSwapFrom] = useState<string | undefined>()
  const [swapTo, setSwapTo] = useState<string | undefined>()
  const [swapFromAmount, setSwapFromAmount] = useState<number>(0)
  const [swapToAmount, setSwapToAmount] = useState<number>(0)
  const [confirmSwap, setConfirmSwap] = useState<boolean>(false)
  const [finishSwap, setFinishSwap] = useState<boolean>(false)

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12} xl={13} order={screens.lg ? 1 : 2}>
          <Card
            className="border-solid border-2 flex items-center justify-center p-4 text-center text-sm"
            style={{
              backgroundColor: styles['secondary-background-color'],
              borderColor: styles['error-orange'],
              color: styles['error-orange'],
              height: '238px'
            }}>
            There is not enough data for this time interval. Try later
          </Card>
        </Col>
        <Col xs={24} lg={12} xl={11} order={screens.lg ? 2 : 1}>
          {!confirmSwap ? (
            <>
              <Card
                className="p-2"
                bordered={false}
                style={{
                  backgroundColor: styles['secondary-background-color']
                }}>
                <Tabs defaultActiveKey="swap" tabBarExtraContent={operations}>
                  <TabPane tab="Swap" key="swap">
                    <div className="my-2">
                      <div className="font-medium text-lg">Exchange</div>
                      <div className="text-sm font-light">Trade tokens in an instant</div>
                    </div>
                    <Card
                      className="my-5"
                      bordered={false}
                      bodyStyle={{ padding: '12px' }}
                      style={{
                        backgroundColor: styles['layout-body-background']
                      }}>
                      <div className="flex items-center justify-between text-sm">
                        <div>From</div>
                        <div>Balance: 0,4890</div>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <div className="flex-none">
                          <Select
                            showSearch
                            className="select-dark"
                            placeholder="Select a currency"
                            value={swapFrom}
                            style={{ minWidth: 90, maxWidth: 250 }}
                            onChange={(val: string) => {
                              setSwapFrom(val)
                            }}>
                            <Option value="eth">
                              <div className="flex items-center">
                                <img alt="ETH" src="/img/currency-icons/eth.png" className="mr-2 w-4 h-4" /> ETH
                              </div>
                            </Option>
                            <Option value="pixel">
                              <div className="flex items-center">
                                <img alt="PIXEL" src="/img/currency-icons/pixel.png" className="mr-2 w-4 h-4" /> PIXEL
                              </div>
                            </Option>
                          </Select>
                          {swapFrom && (
                            <Button type="text" className="ml-2 p-0" style={{ color: styles['secondary-color'] }}>
                              MAX
                            </Button>
                          )}
                        </div>
                        <Input
                          value={swapFromAmount}
                          className="text-lg text-right"
                          type="number"
                          disabled={!swapFrom}
                          min={0}
                          style={{ backgroundColor: styles['layout-body-background'] }}
                          onChange={(e) => {
                            if (!parseFloat(e.target.value) || parseFloat(e.target.value) < 0) return

                            setSwapFromAmount(parseFloat(e.target.value))
                          }}
                        />
                      </div>
                    </Card>
                    <div className="w-full flex justify-center">
                      <ArrowDownOutlined className="my-1" />
                    </div>
                    <Card
                      className="my-5"
                      bordered={false}
                      bodyStyle={{ padding: '12px' }}
                      style={{
                        backgroundColor: styles['layout-body-background']
                      }}>
                      <div className="flex items-center justify-between text-sm">
                        <div>To</div>
                        <div>-</div>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <div className="flex-none">
                          <Select
                            showSearch
                            className="select-dark"
                            placeholder="Select a currency"
                            value={swapTo}
                            style={{ minWidth: 90, maxWidth: 250 }}
                            onChange={(val: string) => {
                              setSwapTo(val)
                            }}>
                            <Option value="eth">
                              <div className="flex items-center">
                                <img alt="ETH" src="/img/currency-icons/eth.png" className="mr-2 w-4 h-4" /> ETH
                              </div>
                            </Option>
                            <Option value="pixel">
                              <div className="flex items-center">
                                <img alt="PIXEL" src="/img/currency-icons/pixel.png" className="mr-2 w-4 h-4" /> PIXEL
                              </div>
                            </Option>
                          </Select>
                          {swapTo && (
                            <Button type="text" className="ml-2 p-0" style={{ color: styles['secondary-color'] }}>
                              MAX
                            </Button>
                          )}
                        </div>
                        <div className="text-lg">
                          <Input
                            value={swapToAmount}
                            className="text-lg text-right"
                            type="number"
                            disabled={!swapTo}
                            min={0}
                            style={{ backgroundColor: styles['layout-body-background'] }}
                            onChange={(e) => {
                              if (!parseFloat(e.target.value) || parseFloat(e.target.value) < 0) return

                              setSwapToAmount(parseFloat(e.target.value))
                            }}
                          />
                        </div>
                      </div>
                    </Card>
                    {!!swapFromAmount && !!swapToAmount && (
                      <div className="flex items-center justify-between mb-4 mt-6">
                        <div>Price</div>
                        <div className="flex items-center ml-1">
                          <span>7.93408 ETH per PIXEL</span>
                          <Button
                            type="primary"
                            icon={<SyncOutlined className="text-xs" />}
                            size="small"
                            shape="circle"
                            className="flex items-center justify-center ml-2 w-5 min-w-0 h-5 min-h-0 border-none transition-opacity duration-300 hover:opacity-80"
                            style={{ backgroundColor: styles['gray-bg-color'] }}
                          />
                        </div>
                      </div>
                    )}
                    <Button
                      type="primary"
                      className="mt-2 w-full border-none transition-opacity duration-300 hover:opacity-80"
                      shape="round"
                      disabled={!swapFromAmount || !swapToAmount}
                      onClick={() => {
                        setConfirmSwap(true)
                      }}
                      style={{
                        backgroundColor: swapFromAmount && swapToAmount ? styles['secondary-color'] : styles['grey-color'],
                        height: 40
                      }}>
                      {swapFromAmount && swapToAmount ? 'Swap' : 'Enter an amount'}
                    </Button>
                  </TabPane>
                  <TabPane tab="Limit" key="limit">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="Add Liquidity" key="liquidity">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              </Card>
              {!!swapFromAmount && !!swapToAmount && (
                <Card
                  className="px-4 py-2 my-7 text-sm"
                  bordered={false}
                  style={{
                    backgroundColor: styles['secondary-background-color']
                  }}>
                  <div className="flex justify-between my-1">
                    <div style={{ color: styles['text-grey-color'] }} className="flex align-center">
                      Minimum received
                      <Tooltip placement="top" title="info">
                        <QuestionCircleOutlined className="mx-2 text-xs cursor-pointer" />
                      </Tooltip>
                    </div>
                    <div>0.0395 ETH</div>
                  </div>
                  <div className="flex justify-between my-1">
                    <div style={{ color: styles['text-grey-color'] }}>Price Impact</div>
                    <div style={{ color: styles['secondary-color'] }}>{'<0.01%'}</div>
                  </div>
                  <div className="flex justify-between my-1">
                    <div style={{ color: styles['text-grey-color'] }}>Liquidity Provider Fee</div>
                    <div>0.05992 ETH</div>
                  </div>
                  <div className="flex justify-between my-1">
                    <div style={{ color: styles['text-grey-color'] }}>Route</div>
                    <div style={{ color: styles['text-grey-color'] }} className="flex align-center">
                      BELT <ArrowRightOutlined className="mx-1 text-xs" /> ETH <ArrowRightOutlined className="mx-1 text-xs" /> PIXEL
                    </div>
                  </div>
                </Card>
              )}
            </>
          ) : (
            <>
              {finishSwap ? (
                <Card
                  className="p-2"
                  bordered={false}
                  style={{
                    backgroundColor: styles['secondary-background-color']
                  }}>
                  <div className="my-2 flex items-center justify-end">
                    <Button
                      type="text"
                      size="small"
                      className="m-0 p-0 flex items-center"
                      icon={<CloseOutlined />}
                      onClick={() => {
                        setFinishSwap(false)
                        setConfirmSwap(false)
                      }}
                      style={{ color: styles['text-grey-color'] }}
                    />
                  </div>

                  <div className="flex items-center flex-col my-14">
                    <div className="font-medium text-lg">Transaction submitted</div>
                    <SmileOutlined className="text-6xl mt-7" style={{ color: styles['secondary-color'] }} />
                    <a
                      href="https://bscscan.com/"
                      target="_blank"
                      className="flex items-center mt-7 text-sm transition-opacity duration-300 hover:opacity-80"
                      style={{ color: styles['secondary-color'] }}
                      rel="noreferrer">
                      View on BscScan <LinkOutlined className="ml-1" />
                    </a>
                  </div>
                  <Button
                    type="primary"
                    className="mt-2 w-full border-none transition-opacity duration-300 hover:opacity-80"
                    shape="round"
                    onClick={() => {
                      setFinishSwap(false)
                      setConfirmSwap(false)
                    }}
                    style={{
                      backgroundColor: swapFromAmount && swapToAmount ? styles['secondary-color'] : styles['grey-color'],
                      height: 40
                    }}>
                    Close
                  </Button>
                </Card>
              ) : (
                <Card
                  className="p-2"
                  bordered={false}
                  style={{
                    backgroundColor: styles['secondary-background-color']
                  }}>
                  <div className="my-2 flex items-center justify-between">
                    <div className="font-medium text-lg">Confirm Swap</div>
                    <Button
                      type="text"
                      size="small"
                      className="m-0 p-0 flex items-center"
                      icon={<CloseOutlined />}
                      onClick={() => {
                        setConfirmSwap(false)
                      }}
                      style={{ color: styles['text-grey-color'] }}
                    />
                  </div>
                  <div className="my-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img alt="ETH" src="/img/currency-icons/eth.png" className="mr-2 w-4 h-4" /> ETH
                      </div>
                      <div>0.24657657</div>
                    </div>
                    <div className="text-right">
                      <ArrowDownOutlined className="my-2 text-sm" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img alt="PIXEL" src="/img/currency-icons/pixel.png" className="mr-2 w-4 h-4" /> PIXEL
                      </div>
                      <div>5</div>
                    </div>
                  </div>
                  <div className="italic text-sm my-5">
                    Input is estimated. You will sell at most <span style={{ color: styles['secondary-color'] }}>0.271804 ETH</span> or the
                    transaction will revert.
                  </div>
                  <div className="mt-7 mb-5 text-sm">
                    <div className="flex justify-between my-3">
                      <div>Price</div>
                      <div className="flex items-center ml-1">
                        <span>7.93408 ETH per PIXEL</span>
                        <Button
                          type="primary"
                          icon={<SyncOutlined className="text-xs" />}
                          size="small"
                          shape="circle"
                          className="flex items-center justify-center ml-2 w-5 min-w-0 h-5 min-h-0 border-none transition-opacity duration-300 hover:opacity-80"
                          style={{ backgroundColor: styles['gray-bg-color'] }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between my-3">
                      <div>Minimum sold</div>
                      <div>0.21408 ETH</div>
                    </div>
                    <div className="flex justify-between my-3">
                      <div>Price Impact</div>
                      <div style={{ color: styles['secondary-color'] }}>{'<0.01%'}</div>
                    </div>
                    <div className="flex justify-between my-3">
                      <div>Liquidity Provider Fee</div>
                      <div>0.000004538 ETH</div>
                    </div>
                  </div>
                  <Button
                    type="primary"
                    className="mt-2 w-full border-none transition-opacity duration-300 hover:opacity-80"
                    shape="round"
                    onClick={() => {
                      setFinishSwap(true)
                    }}
                    style={{
                      backgroundColor: swapFromAmount && swapToAmount ? styles['secondary-color'] : styles['grey-color'],
                      height: 40
                    }}>
                    Confirm Swap
                  </Button>
                </Card>
              )}
            </>
          )}
        </Col>
      </Row>
    </div>
  )
}
