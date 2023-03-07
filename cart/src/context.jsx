import React, { useEffect, createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import { CLEAR_CART, REMOVE_ITEM, CHANGE_QTD, GET_TOTAL, LOADING, DISPLAY_DATA } from './actions';

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

const useAppContext = () => useContext(AppContext);

const defaultState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = (props) => {
  const {children} = props;
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearCart = () => {
    dispatch({type: CLEAR_CART})
  };

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: { id } })
  };

  const changeQtd = (id, type) => {
    dispatch({type: CHANGE_QTD, payload: { id, type }})
  };

  const fetchData = async () => {
    dispatch({type: LOADING})
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({type: DISPLAY_DATA, payload: { cart }})
  };

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    dispatch({type: GET_TOTAL})
  }, [state.cart]);
  
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        changeQtd
      }}
    >
      {children}
    </AppContext.Provider>
  )
};
// make sure use

export { useAppContext, AppProvider };
