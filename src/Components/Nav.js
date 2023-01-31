import React from "react";
import Logo from "./Logo.svg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }
  function goReserve() {
    navigate("/reserve");
  }

  return (
    <nav className="navbar">
      <img src={Logo} alt="logo"></img>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#" onClick={goHome}>
              Home
            </a>
          </li>
          <li>
            <a href="#menu">Menu</a>{" "}
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#reserve" onClick={goReserve}>
              Reservations
            </a>
          </li>
          <li>
            <a href="#order">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
