
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import { createContext, useState } from "react";
import Signin from "./Components/Auth/Signin";

const UserContext = createContext();

const CartContext = createContext();

function App() {
  const [authdata , setAuthdata]=useState(null); 

  const [cart  ,  setCart] = useState([]);

  // const signin = (data)=>{
  //   authdata = data;
  //   console.log(11,authdata);
  // }

  // const cart = {
  //   items: [
  //     { productId: 10, quantity: 5 },
  //     { productId: 8, quantity: 4 },
  //   ],
  // };

  return (
    <div className="App">
      <UserContext.Provider value={{authdata,setAuthdata}}>
        <CartContext.Provider value={{cart,setCart}}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;


export { UserContext, CartContext };
