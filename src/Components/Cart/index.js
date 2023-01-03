import { useContext } from "react";

import { CartContext } from "../../App";
import CartItems from "../shared/CartItems";
import Summary from "../shared/Summary";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  console.log(cart);

  return(
    <>
   

      <div style={{padding:'100px 500px'}}>
          <div  style={{ display: 'flex', padding: '5px' }}>
            <span style={{ flex: 1 }}><CartItems/></span>
            <span style={{ flex: 2}}><Summary/></span>

          </div>
          <div  style={{ display: 'flex', padding: '5px' }}>
            <span style={{ flex: 1 }}>
              <button style={{padding:'20px',backgroundColor:'lightgreen',borderColor:'lightgreen'}} onClick={()=>{navigate('/')}} >Shop More</button>
              <button style={{padding:'20px',backgroundColor:'lightpink',borderColor:'lightpink'}} onClick={()=>{navigate('/checkout')}}>Checkout</button>
            </span>
           

          </div>
      </div>    
    </>
  )
};

export default Cart;
