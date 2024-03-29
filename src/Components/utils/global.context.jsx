import { createContext, useContext, useReducer, useEffect } from "react";
import axios from 'axios';
import { reducer } from "../../Reducer/Reducer";


const ContextGlobal = createContext(); //✔️

const initialState = { //✔️
  list: [],
  favs: [], 
  theme: ""
} 

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const {list, favs, theme} = state

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    //.then(response => console.log(response.data))
    .then(response => dispatch({type: 'GET_CHARACTERS', payload: response.data}))
  }, [])



  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{list, favs, dispatch, theme}}>
      {children}
    </ContextGlobal.Provider>
  );

};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)
