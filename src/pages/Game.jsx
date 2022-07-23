import React, { useEffect, useState } from 'react'
import { Col, Row, Card } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';




const Game = () => {

  const location = useLocation();
  let navigate = useNavigate();
  const [login, setLogin] = useState();

  useEffect(() => {
    (location.state == null) ? navigate("/") : console.log('Entraron Bien!')
  });

  const { Meta } = Card;

  return (
    <div style={{ width: '100%', backgroundColor: '#ccc', opacity: 0.8, textAlign: 'center' }}>
      <Row>
        <Col span={12} style={{ border: '.5px solid' }}>
          <h2>{location.state?.values.player1}</h2>
        </Col>
        <Col span={12} style={{ border: '.5px solid' }}>
          <h2>{location.state?.values.player2}</h2>
        </Col>
      </Row>
      <Row>
        <Col span={12}>Cartas opcionadas</Col>
        <Col span={12}>Cartas opcionadas</Col>
      </Row>
      <Row>
        <Col span={6}>
          <Card style={{ width: '100%', margin: 'center' }}>
            <p>xxx</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ width: '100%', margin: 'center' }}>
            <p>xxx</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ width: '100%', margin: 'center' }}>
            <p>xxxx</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ width: '100%', margin: 'center' }}>
            <p>xxxx</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Game