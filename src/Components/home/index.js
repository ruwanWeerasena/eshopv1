import { useEffect,useState } from "react";
import axios from "axios";
import ProductCart from "./ProductCart";

const Home = ()=>{


    const [products,setproducts] = useState([]);


    useEffect(()=>{

        async function fetchData(){
           const response = await axios.get("http://localhost:5000/product");
           setproducts(response.data);
        }

        fetchData();

    },[])

    return(
        <>
        {products.map((product)=><ProductCart key={product.id} name={product.name} pictureFileName={product.pictureFileName}
                 pictureUri={product.pictureUri} price = {product.price} id = {product.id} />)}

        </>
    )
}

export default Home;
