import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
const CheckOut = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://th.bing.com/th/id/OIP.p8oppw1-CmSXK75_TQLrygHaBn?w=287&h=76&c=7&r=0&o=5&pid=1.7"
        />
        <div className="checkout_title">
          <h2>your shopping basket</h2>
        </div>
        {basket?.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.img}
            ratings={item.ratings}
          />
        ))}
      </div>
      <div className="checkout_right">
        <h2>subtotal will go here</h2>
        <Subtotal />
      </div>
    </div>
  );
};

export default CheckOut;
