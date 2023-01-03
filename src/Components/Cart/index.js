import { useContext } from "react";

import { UserContext, CartContext } from "../../App";
import CartItems from "./CartItems";
import Summary from "./Summary";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();
  const { authdata } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  console.log(cart);

  return(
    <>
      <CartItems/>
      <br/><br/>
      <Summary/> 
      <br/>
      <button style={{padding:'20px',backgroundColor:'lightgreen',borderColor:'lightgreen'}} onClick={()=>{navigate('/')}} >Shop More</button>
      <button style={{padding:'20px',backgroundColor:'lightpink',borderColor:'lightpink'}} onClick={()=>{navigate('/checkout')}}>Checkout</button>     
    </>
  )
};

export default Cart;
