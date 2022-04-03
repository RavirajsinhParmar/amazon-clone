import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import "./payment.css";
import { useStateValue } from "../../StateProvider";
import { CardElement } from "react-stripe-elements";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../Reducer";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);
  const [processing, setProcessing] = React.useState("");

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Your order for ${basket.length} items placed successfully`);
    history("/");
    dispatch({
      type: "EMPTY_BASKET",
    });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          CheckOut(
          <Link to={"/checkout"}>{basket?.length} items</Link>)
        </h1>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123, React Lane,</p>
            <p>Town House, Goa</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.img}
                price={item.price}
                ratings={item.ratings}
              />
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={basket.length <= 0}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
