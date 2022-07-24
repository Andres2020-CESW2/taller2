import { useContext } from "react"
import IdContext from "../context/IdProvider";

const useGame = () => {
    return useContext(IdContext);
}
export default useGame;