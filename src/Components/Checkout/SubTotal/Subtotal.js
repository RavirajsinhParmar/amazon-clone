import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../Reducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  const history = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              this order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history("/payment")}> Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
