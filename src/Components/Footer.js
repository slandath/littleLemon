import React from "react";
import Logo from "./Logo.svg";

const Footer = () => {
  return (
    <footer>
      <ul>
        <img src={Logo} alt="logo"></img>
        <li>Contact Info</li>
        <li>Facebook</li>
        <li>IG</li>
        <li>TikTok</li>
      </ul>
    </footer>
  );
};

export default Footer;
