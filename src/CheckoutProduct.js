import React from "react";
import "./checkoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, image, title, price, ratings }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFormBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div key={id} className="chekoutProduct">
      <img className="checkoutProduct_img" src={image} />
      <div className="checkoutProduct_info ">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct_rating">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
        <button onClick={removeFormBasket}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
