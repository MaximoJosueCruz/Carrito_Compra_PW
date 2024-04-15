import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import "./CartContent.css";
import Navbar from "../navbar/Navbar";
const CartContent = () => {
  const {cart}= useContext(dataContext);
  
  //condicional 
  return (
    <>
      <Navbar />
      {cart.length > 0 ?(
        <>
        <CartElements />
        <CartTotal />
        </>
      ) : (
        <h2 className="cart-message-center"> Your cart is empty</h2>
      )}
    </>
  );
};



export default CartContent;