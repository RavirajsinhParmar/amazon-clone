import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import "./login.css";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to={"/"}>
        <img
          className="login_logo"
          src="https://th.bing.com/th/id/OIP.CaxkGJYq0NISgPnjMh4NAQHaEl?w=298&h=184&c=7&r=0&o=5&pid=1.7"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5> Email</h5>
          <input
            type={"text"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5> password</h5>
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="signin_button" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to conditions of use & sale. please see our
          privacy notice, our cookies notice and our interest-based ads notice.
        </p>
        <button className="register_button" onClick={register}>
          Create new account
        </button>
      </div>
    </div>
  );
};

export default Login;
