import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const RepartirContext = createContext();

const RepartirProvider = ({children}) => {
    const [cards, setCards] = useState();
    const [repartir, setRepartir] = useState();
    const [escuchar, setEcuchar] = useState(0);
    const handleRepartir = (e) => {
        setRepartir(e);
        setEcuchar(escuchar + 1);
    }
    useEffect (() => {
        if (repartir !== undefined) {
            consultarApi();
        }
    }, [repartir, escuchar]);
    const consultarApi = async () => {
        const url = `http://deckofcardsapi.com/api/deck/${repartir}/draw/?count=2`;
        const {data} = await axios(url);
        setCards(data.cards);
        console.log(cards[0].image)
    };
  return (
    <RepartirContext.Provider value={{repartir, handleRepartir, cards}}>{children}</RepartirContext.Provider>
  );
}

export {RepartirProvider};
export default RepartirContext;