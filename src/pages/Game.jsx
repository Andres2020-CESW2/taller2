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
  const [listCartasJugadorUno, setListCartasJugadorUno] = useState([]);
  const [listCartasJugadorDos, setListCartasJugadorDos] = useState([]);
  const [listCodigoUno, setListCodigoUno] = useState([]);
  const [listCodigoDos, setListCodigoDos] = useState([]);
  const [cardWinUno, setCardWinUno] = useState([]);
  const [cardWinDos, setCardWinDos] = useState([]);
  useEffect(() => {
    let listaGenericaUno = listCartasJugadorUno; 
    let listaGenericaDos = listCartasJugadorDos; 
    let listaCodigoUno = listCodigoUno; 
    let listaCodigoDos = listCodigoDos; 
    let listaGenerica = listCartas;
    const found = listCodigoUno.find(element => element == cards[0].value);
    const found2 = listCodigoDos.find(element => element == cards[1].value);
    if (found != undefined) {
      setCardWinUno(listCartas.find(element => element.value == cards[0].value));
      alert(location.state?.values.player1 + " Felicitaciones! Eres el ganador");
    }
    if (found2 != undefined) {
      setCardWinDos(listCartas.find(element => element.value == cards[1].value));
      alert(location.state?.values.player2 + " Felicitaciones! Eres el ganador");
    }
    if (cards) {
      listaGenericaUno.push(cards[0].image);
      listaGenericaDos.push(cards[1].image);
      listaCodigoUno.push(cards[0].value);
      listaCodigoDos.push(cards[1].value);
      listaGenerica.push(cards[0]);
      listaGenerica.push(cards[1]);
    } 
    
    setListCartasJugadorUno(listaGenericaUno); 
    setListCartasJugadorDos(listaGenericaDos); 
    setListCodigoUno(listaCodigoUno); 
    setListCodigoDos(listaCodigoDos); 
    
    
    setListCartas(listaGenerica);
    // console.log(listCartas);
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
          <Card style={{ width: '100%', margin: 'center' }}>{
            cards ? <img src={cards[0].image}></img> : <p>no hay nada</p>
          }</Card>
        </Col>
        <Col span={6} style={{borderRight: '.5px solid'}}>
          <Card style={{ width: '100%', margin: 'center' }}>{
            cardWinUno ? <img src={cardWinUno.image}></img> : <p>no hay nada</p>
          }</Card>
        </Col>
        {/* `Cartas ganadoras del jugador 2` */}
        <Col span={6} style={{borderLeft: '.5px solid'}}>
          <Card style={{ width: '100%', margin: 'center' }}>{
            cards ? <img src={cards[1].image}></img> : <p>no hay nada</p>
          }</Card>
        </Col>
        <Col span={6}>
          <Card style={{ width: '100%', margin: 'center' }}>{
            cardWinDos ? <img src={cardWinDos.image}></img> : <p>no hay nada</p>
          }</Card>
        </Col>
      </Row>
      <Row style={{ position: 'relative', bottom: '50px', height: '60px' }}>
        <Col span={12} style={{borderRight: '.5px solid'}}>Cartas Obtenidas</Col>
        <Col span={12} style={{borderLeft: '.5px solid'}}>Cartas Obtenidas</Col>
      </Row>
      <Row style={{height: '430px', position: 'relative', bottom: '50px'}} >
        
        <Col span={12} style={{borderRight: '.5px solid'}}>{
          cards ? <img src={cards[0].image}></img> : <p>no hay nada</p>
        }</Col>
        <Col span={12} style={{borderLeft: '.5px solid'}}>{
          cards ? <img src={cards[1].image}></img> : <p>no hay nada</p>
        }</Col>
      </Row>
    </div>
  )
}

export default Game