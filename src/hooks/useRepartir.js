import React, { useContext } from 'react'
import RepartirContext from "../context/RepartirProvider";

const useRepartir = () => {
  return useContext(RepartirContext);
}

export default useRepartir