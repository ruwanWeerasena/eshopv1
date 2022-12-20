import { useContext } from "react";

import { UserContext, CartContext } from "../../App";

const Cart = () => {

  const { email } = useContext(UserContext);
  const { items } = useContext(CartContext);

  console.log(items);

  return <>Cart</>;
};

export default Cart;
