import React from "react";
import "./Header.css";
<<<<<<< HEAD
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
=======
import header_img from "../../assets/header_img.png"

const Header = () => {
  return (
    <div className="header" style={{backgroundImage: `url(${header_img})`}}>
>>>>>>> ec83d5c762d12d0603d216d876a41298354cffb4
      <div className="header-contents">
        <h2>Order your favourite food here.</h2>
        <p>
          North Indian, Chinese, Kebab, Mughlai, Seafood, Desserts, Beverages.
          Everything at your finger tips.
        </p>
      </div>
    </div>
  );
};

export default Header;
