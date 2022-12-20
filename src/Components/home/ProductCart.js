import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, CartContext } from "../../App";

const ProductCart = ({ name, pictureFileName, pictureUri, price, id }) => {

    
    const {authdata} = useContext(UserContext);
    const {cart,setCart} = useContext(CartContext);
    const navigate = useNavigate();
    
    const addtoCart = async ()=>{

        if(authdata?.token){

            const item = {"customerId":authdata.customer.id,"productId":id,"Quantity":1};

            if(cart.find(x=>x.productId==id)){
                //updaet
                try {
                    const {data} = await axios.put(`http://localhost:5000/cart/${id}`,item,{
                        headers:
                        {
                            'Authorization': `bearer ${authdata.token}`
                        }
                    });
                    // const {product,id,...CartItem} = data;
                    cart.push(item);
                    setCart(cart)
                    console.log(111,data,cart);
                    
                } catch (error) {
                    console.log(error);
                }
            }else{
                try {
                    const {data} = await axios.post("http://localhost:5000/cart",item,{
                        headers:
                        {
                            'Authorization': `bearer ${authdata.token}`
                        }
                    });
                    // const {product,id,...CartItem} = data;
                    cart.push(item);
                    setCart(cart)
                    console.log(222,data,cart);
                    
                } catch (error) {
                    console.log(error);
                }
            }
            

           

            
        }else{
            navigate("/signin");
            
        }
    }
    return(

        <>
        <button style={{cursor:'pointer'}} onClick={addtoCart} >
                <h3> {name}</h3>
                <div>
                    <span>
                        <img src = {pictureUri+pictureFileName} alt="pic" width={100} height={100}/>
                    </span>
                </div>
                <span>LKR {price}</span>

        </button>
        
        </>
        
        )

}

export default ProductCart;
