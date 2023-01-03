import { useContext } from "react";
import { CartContext } from "../../App";


const Summary = ()=>{

    const {cart} = useContext(CartContext);

    const total = cart.reduce((acc,current)=>acc+current.product.price*current.quantity , 0);


    return (
      <div>
        <table
          style={{
            borderWidth: "5px",
            borderStyle: "solid",
          }}
        >
          <thead>
            <tr>
                <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Your Grand Total = Rs.{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default Summary;