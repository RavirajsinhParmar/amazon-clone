import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import "./Header.css";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchOutlined className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLine1">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header_optionLine2">
              {user ? "sign out" : "sign in"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLine1"> Returns </span>
          <span className="header_optionLine2"> & Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLine1">Your </span>
          <span className="header_optionLine2">Prime </span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingCartOutlined style={{ fontSize: "25px" }} />
            <span className="header_optionLine2 header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
