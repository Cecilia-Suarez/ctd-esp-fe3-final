import { createContext, useContext, useReducer, useEffect } from "react";
import axios from 'axios';
import { reducer } from "../../Reducer/Reducer";


const ContextGlobal = createContext(); 

const initialState = { 
  list: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  theme: "",
  dentistDetail: {}
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { list, favs, theme, dentistDetail } = state

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
      //.then(response => console.log(response.data))
      .then(response => dispatch({ type: 'GET_CHARACTERS', payload: response.data }))
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs))
  }, [favs]) 

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{ list, favs, dispatch, theme, dentistDetail }}>
      {children}
    </ContextGlobal.Provider>
  );

};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)
