import React from "react";
import restaurant from "../assets/restaurant.jpg";

const Hero = () => {
  return (
    <header className="header-container">
      <div className="hero-container">
        <h2>Little Lemon</h2>
        <br />
        <h3>Chicago</h3>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nisl
          a ipsum pretium ultricies et vitae nibh. Integer viverra. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec ac nisl a ipsum
          pretium ultricies et vitae nibh. Integer viverra.
        </p>
        <br />
        <button>Book a Table</button>
      </div>
      <div className="header-image-container">
        <img src={restaurant} alt="restaurant"></img>
      </div>
    </header>
  );
};

export default Hero;
