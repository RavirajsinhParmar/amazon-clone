import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

const Products = ({ id, title, img, price, ratings }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        ratings: ratings,
      },
    });
  };

  return (
    <div key={id} className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product_rating">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
      </div>
      <img src={img} alt="" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
};

export default Products;
