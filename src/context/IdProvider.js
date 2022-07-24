import { createContext, useEffect, useState } from "react";
import axios from "axios";

const IdContext = createContext();

const IdProvider = ({children}) => {
    const [id, setId] = useState();
    const [click, setClick] = useState();
    const handleClick = (e) =>{
        setClick(e.target.value);
    }
    useEffect(() => {
        const consultarAPI = async () => {
          const url = `http://deckofcardsapi.com/api/deck/new/`;
          const { data } = await axios(url);
          setId(data.deck_id);
        };
        consultarAPI();
      }, [click]);
    return (
        <IdContext.Provider value={{click, handleClick, id}}>{children}</IdContext.Provider>
    );
}

export { IdProvider };
export default IdContext;