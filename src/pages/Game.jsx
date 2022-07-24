import React, { useEffect, useState } from 'react'
import { Col, Row, Card } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  PlayCircleOutlined, SketchOutlined
} from '@ant-design/icons';
import useGame from '../hooks/useGame';
import { RepartirProvider } from '../context/RepartirProvider';
import useRepartir from '../hooks/useRepartir';
import axios from 'axios';



const Game = () => {

  const location = useLocation();
  let navigate = useNavigate();
  const {click, handleClick, id} = useGame();
  // const [cards, setCards] = useState();
  // const consultarApi = async () => {
  //   const url = `http://deckofcardsapi.com/api/deck/${id}/draw/?count=2`;
  //   const {data} = await axios(url);
  //   setCards(data.cards);
  //   console.log(cards);
  // };
  useEffect(() => {
    (location.state == null ) ? navigate("/") : console.log('Entraron Bien!');
  });
  const {repartir,handleRepartir, cards} = useRepartir();
  
  const [listCartas, setListCartas] = useState([]);
  useEffect(() => {
    let listaGenerica = [];
    listaGenerica.push(cards);
    setListCartas(listaGenerica);
    console.log(listCartas);
  }, [cards]);
  


  // const handleRepartir = () => {
  //   const {repartir, cards} = useRepartir;
  //   repartir = id;
  // }
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
      <PlayCircleOutlined style={{ fontSize: '50px', position: 'relative', bottom: '55px', display: 'inline' }} onClick={() => handleRepartir(id)}/>
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
        <Col span={12} style={{borderRight: '.5px solid'}}>{
          cards?
          <img src={cards[0].image}></img>
          :
          <p>no hay nada</p>
        }</Col>
        <Col span={12} style={{borderLeft: '.5px solid'}}></Col>
      </Row>
    </div>
  )
}

export default Game