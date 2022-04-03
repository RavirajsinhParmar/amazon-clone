import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckOut from "./CheckOut";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "react-stripe-elements";
import { StripeProvider } from "react-stripe-elements";

function App() {
  const [{}, dispatch] = useStateValue();
  const api_Key =
    "pk_test_51Kk835SIl4zZsINITv4OStnorddv1djGwonhPOfBTQBFPRsOl3eS0X79GmZIi10T0Y2Jfo4j4gJrORzjhJhNHJ7Z00piD4kJSD";
  const stripe = loadStripe(api_Key);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user :", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <CheckOut />
              </>
            }
          ></Route>
          <Route
            exact
            path="/payment"
            element={
              <>
                <Header />
                <StripeProvider apiKey={api_Key}>
                  <Elements stripe={stripe}>
                    <Payment />
                  </Elements>
                </StripeProvider>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
