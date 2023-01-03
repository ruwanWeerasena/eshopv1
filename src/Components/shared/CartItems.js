import { useContext } from "react";
import { CartContext } from "../../App";


const CartItems = ()=>{

    const {cart} = useContext(CartContext)


    return(
        <table >
            <thead>
                <tr>
                    <th style={{paddingLeft:'20px',paddingRight:'20px',borderStyle:'solid'}}>Name</th>
                    <th style={{paddingLeft:'20px',paddingRight:'20px',borderStyle:'solid'}}>Price</th>
                    <th style={{paddingLeft:'20px',paddingRight:'20px',borderStyle:'solid'}}>Quantity</th>
                    <th style={{paddingLeft:'20px',paddingRight:'20px',borderStyle:'solid'}}>Total</th>
                </tr>

            </thead>
           <tbody style={{border:'solid'}}>
            {
            
            cart.map((itm)=>{
                    return(
                        <tr  key={itm.id}>
                            <td style={{paddingLeft:'20px',paddingRight:'20px',borderStyle:'solid'}}>{itm.product.name}</td>
                            <td style={{paddingLeft:'20px',paddingRight:'20px',borderStyle:'solid'}}>{itm.product.price}</td>
                            <td style={{paddingLeft:'20px',paddingRight:'20px',borderStyle:'solid'}}>{itm.quantity}</td>
                            <td style={{paddingLeft:'20px',paddingRight:'20px',borderStyle:'solid'}}>{itm.product.price*itm.quantity}</td>
                        </tr>
                    )
                })
                
            }

           </tbody>

           
        </table>
    )
}

export default CartItems;