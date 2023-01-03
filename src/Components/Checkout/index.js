
import { useContext, useState } from "react";
import CartItems from "../shared/CartItems";
import Summary from "../shared/Summary";
import Address from "./Address";
import PaymentOption from "./PaymentOption";
import axios from "axios";
import { UserContext } from "../../App";
const Checkout = () => {

  const [address,setAddress] = useState({"streetAddress":"RanalaRoad","city":"Homagama","state":"Western"})
  

  const {authdata} = useContext(UserContext);
  
  const createOrder = async (e)=>{
    e.preventDefault();
    const chekout  = {"customerId":authdata.customer.id,"streetAddress": address.streetAddress,"city": address.city,"state":address.state,"paymentMethod": "card"};
    try {
      const data = await axios.post("http://localhost:5000/checkout",chekout)
      console.log(data);
    } catch (error) {
        
    }

}

  return(

    <>
        <Address address={address} setAddress={setAddress}/>
        <div style={{padding:'0px 500px'}}>
              <div  style={{ display: 'flex', padding: '5px' }}>
                <span style={{ flex: 1 }}><CartItems/></span>
                <span style={{ flex: 2}}><Summary/></span>

              </div>
              
        </div>
        <PaymentOption/>
        <button style={{padding:'20px',backgroundColor:'lightgreen',borderColor:'lightgreen'}} onClick={createOrder}>Create Order</button>
        
    
    </>
    
    
      
      
      
    
    

  )
};

export default Checkout;
