import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [cartTotalValue, setCartTotalValue] = useState([0]);
  const [restaurantId, setRestaurantId] = useState('');
  const [cartWithOrders, setCartWithOrders] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOrder,setCartOrder] = useState({
    products:[],
    paymentMethod:""
  });

  const states = { cart, cartOrder, cartWithOrders, cartTotalValue, restaurantId };
  const setters = { setCart, setCartOrder, setCartWithOrders, setCartTotalValue, setRestaurantId };
  const requests = {};
  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
