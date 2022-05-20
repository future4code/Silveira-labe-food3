import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [cartOrder,setCartOrder] = useState({
    products:[],
    paymentMethod:""
  });

  const states = { cart, cartOrder };
  const setters = { setCart, setCartOrder };
  const requests = {};
  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
