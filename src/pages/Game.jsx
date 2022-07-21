import React from 'react'
import { Col, Row, Card } from 'antd';


const Game = () => {


  const { Meta } = Card;

  return (
    <div style={{ width: '100%', backgroundColor: '#ccc', opacity: 0.8, textAlign: 'center' }}>
      <Row>
        <Col span={12} style={{ border: '.5px solid' }}>
          <h2>Player 1</h2>
        </Col>
        <Col span={12} style={{ border: '.5px solid' }}>
          <h2>Player 2</h2>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
        <Card style={{ width: '100%', margin: 'center' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
        <Card style={{ width: '100%', margin: 'center' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
        <Card style={{ width: '100%', margin: 'center' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
        <Card style={{ width: '100%', margin: 'center' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Game