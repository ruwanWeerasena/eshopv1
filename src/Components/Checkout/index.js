
import CartItems from "../Cart/CartItems";
import Summary from "../Cart/Summary";
const Checkout = () => {

  return(
    <div style={{padding:'100px 500px'}}>
      <div  style={{ display: 'flex', padding: '5px' }}>
            <span style={{ flex: 1 }}><CartItems/></span>
            <span style={{ flex: 2}}><Summary/></span>

          </div>
    </div>
    
      
      
      
    
    

  )
};

export default Checkout;
