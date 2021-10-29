/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd'

export default function Collection(): JSX.Element {
  return (
    <>
      <div>
        <div className="font-bold">
          Pixelswap is a gameified decentralized exchange and yield-farmer with a built-in NFT-Craft system based on Binance Smart Chain
          (BSC).
        </div>
        <div className="mt-5">
          Token PIXEL is used for government votes, stacking and NFT-crafts in special Pixel Extractor by combustion of token.
        </div>
      </div>
      <Row gutter={[40, 40]} className="mt-14">
        <Col xs={24} sm={12} md={8} className="flex items-center justify-center flex-col">
          <img alt="NFT-Octopus" src="/img/nft/octopus.png" />
          <div className="text-2xl">Осьминог</div>
        </Col>
        <Col xs={24} sm={12} md={8} className="flex items-center justify-center flex-col">
          <img alt="NFT-Hamster" src="/img/nft/hamster.png" />
          <div className="text-2xl">Хомяк</div>
        </Col>
        <Col xs={24} sm={12} md={8} className="flex items-center justify-center flex-col">
          <img alt="NFT-Octopus" src="/img/nft/octopus.png" />
          <div className="text-2xl">Осьминог</div>
        </Col>
      </Row>
    </>
  )
}
