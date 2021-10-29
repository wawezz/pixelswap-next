import { XAxis, YAxis, Legend, Area, ComposedChart, Bar, ResponsiveContainer } from 'recharts'
import { Card, Col, Row } from 'antd'
import styles from '@/styles/exports.module.less'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'

export default function Dashboard(): JSX.Element {
  const screens = useBreakpoint()

  let chartHeight = 250

  if (screens.sm) {
    chartHeight = 250
  }
  if (screens.md) {
    chartHeight = 173
  }
  if (screens.lg) {
    chartHeight = 244
  }
  if (screens.xl) {
    chartHeight = 226
  }

  const dataTvl = [
    { TVL: 1 },
    { TVL: 4 },
    { TVL: 2 },
    { TVL: 6 },
    { TVL: 6 },
    { TVL: 3 },
    { TVL: 10 },
    { TVL: 8 },
    { TVL: 12 },
    { TVL: 9 },
    { TVL: 15 },
    { TVL: 9 },
    { TVL: 12 },
    { TVL: 9 },
    { TVL: 14 },
    { TVL: 9 },
    { TVL: 18 },
    { TVL: 11 },
    { TVL: 14 },
    { TVL: 18 },
    { TVL: 15 },
    { TVL: 20 },
    { TVL: 11 }
  ]

  const dataVolume = [
    { Volume: 1 },
    { Volume: 4 },
    { Volume: 2 },
    { Volume: 6 },
    { Volume: 6 },
    { Volume: 3 },
    { Volume: 10 },
    { Volume: 8 },
    { Volume: 12 },
    { Volume: 9 },
    { Volume: 15 },
    { Volume: 9 },
    { Volume: 12 },
    { Volume: 9 },
    { Volume: 14 },
    { Volume: 9 },
    { Volume: 18 },
    { Volume: 11 },
    { Volume: 14 },
    { Volume: 18 },
    { Volume: 15 },
    { Volume: 20 },
    { Volume: 11 }
  ]

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card bordered={false} className="block" style={{ backgroundColor: styles['secondary-background-color'] }}>
            <ResponsiveContainer width="100%" height={chartHeight}>
              <ComposedChart data={dataTvl}>
                <Legend verticalAlign="top" />
                <XAxis />
                <YAxis />
                <Area type="monotone" dataKey="TVL" stroke="#22c998" fill="#1a9681" />
              </ComposedChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card bordered={false} className="block" style={{ backgroundColor: styles['secondary-background-color'] }}>
            <ResponsiveContainer width="100%" height={chartHeight}>
              <ComposedChart data={dataVolume}>
                <Legend verticalAlign="top" />
                <XAxis />
                <YAxis />

                <Bar strokeWidth={2} dataKey="Volume" stroke="#ad19c5" fill="#a62cff" />
              </ComposedChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col
          xs={24}
          className="flex flex-col md:flex-row my-7 py-3 px-6"
          style={{ backgroundColor: styles['secondary-background-color'], borderRadius: styles['border-radius-base'] }}>
          <div>
            Pixel Owned: <b>247 ($98.08)</b>
            <span style={{ color: styles['primary-color'] }}> (↓12.08%)</span>
          </div>
          <div className="ml-0 md:ml-5">
            Net Owned: 3 <b>($1200)</b>
            <span style={{ color: styles['primary-color'] }}> (↓12.29%)</span>
          </div>
          <div className="ml-0 md:ml-5">
            TVL: <b>$2.97b</b>
            <span style={{ color: styles['secondary-color'] }}> (↑1.12%)</span>
          </div>
        </Col>
      </Row>
      <Row
        className="flex my-7"
        style={{ backgroundColor: styles['secondary-background-color'], borderRadius: styles['border-radius-base'] }}>
        <Col xs={24} className="flex py-3 px-6 justify-between">
          <div>Pixel price</div>
          <b>$0.04</b>
        </Col>
        <Col xs={24} className="flex py-3 px-6 justify-between" style={{ backgroundColor: styles['secondary-background-color_lighten'] }}>
          <div>Total Pixel Supply</div>
          <b>1 227 104</b>
        </Col>
        <Col xs={24} className="flex py-3 px-6 justify-between">
          <div>Total Pixel Burned</div>
          <b>22 010</b>
        </Col>
        <Col xs={24} className="flex py-3 px-6 justify-between" style={{ backgroundColor: styles['secondary-background-color_lighten'] }}>
          <div>Market Cap</div>
          <b>$350.137</b>
        </Col>
        <Col xs={24} className="flex py-3 px-6 justify-between">
          <div>New Pixel Per Block</div>
          <b>12</b>
        </Col>
      </Row>
    </div>
  )
}
