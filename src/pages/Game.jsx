import React, { useEffect, useState } from 'react'
import { Col, Row, Card } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  PlayCircleOutlined
} from '@ant-design/icons';



const Game = () => {

  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    (location.state == null) ? navigate("/") : console.log('Entraron Bien!')
  });

  const { Meta } = Card;

  return (
    <div style={{ width: '100%', backgroundColor: '#ccc', opacity: 0.8, textAlign: 'center' }}>

      <Row style={{ height: '60px' }}>
        <Col span={12} style={{ borderBottom: '.5px solid' }}>
          <h2 style={{ marginTop: '10px' }}>{"Jugador 1: " + location.state?.values.player1}</h2>
        </Col>
        <Col span={12} style={{ borderBottom: '.5px solid' }}>
          <h2 style={{ marginTop: '10px' }}>{"Jugador 2: " + location.state?.values.player2}</h2>
        </Col>
      </Row>
      <PlayCircleOutlined style={{ fontSize: '50px', position: 'relative', bottom: '55px', display: 'inline' }} />
      <Row style={{ position: 'relative', bottom: '50px', height: '60px' }}>
        <Col span={12} style={{borderRight: '.5px solid'}}>Cartas opcionadas</Col>
        <Col span={12} style={{borderLeft: '.5px solid'}}>Cartas opcionadas</Col>
      </Row>
      <Row style={{ position: 'relative', bottom: '50px', borderBottom: '.5px solid', paddingBottom: '10px' }}>
        {/* `Cartas ganadoras del jugador 1` */}
        <Col span={6}>
          <Card style={{ width: '100%', margin: 'center' }}>
            <p>xxx</p>
          </Card>
        </Col>
        <Col span={6} style={{borderRight: '.5px solid'}}>
          <Card style={{ width: '100%', margin: 'center' }}>
            <p>xxx</p>
          </Card>
        </Col>
        {/* `Cartas ganadoras del jugador 2` */}
        <Col span={6} style={{borderLeft: '.5px solid'}}>
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
      <Row style={{ position: 'relative', bottom: '50px', height: '60px' }}>
        <Col span={12} style={{borderRight: '.5px solid'}}>Cartas Obtenidas</Col>
        <Col span={12} style={{borderLeft: '.5px solid'}}>Cartas Obtenidas</Col>
      </Row>
      <Row style={{height: '430px', position: 'relative', bottom: '50px'}} >
        <Col span={12} style={{borderRight: '.5px solid'}}>xxxx</Col>
        <Col span={12} style={{borderLeft: '.5px solid'}}>xxxx</Col>
      </Row>
    </div>
  )
}

export default Game