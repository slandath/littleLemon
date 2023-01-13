import React from "react";
import Logo from "./Logo.svg";

const Nav = () => {
  return (
    <nav>
      <ul>
        <img src={Logo} alt="logo"></img>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Nav;
