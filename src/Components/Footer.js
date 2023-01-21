import React from "react";
import Logo from "./Logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt="logo"></img>
      <div className="footer-links">
        <ul>
          <li>
            <a href="#">Contact Info</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">IG</a>
          </li>
          <li>
            <a href="#">TikTok</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
