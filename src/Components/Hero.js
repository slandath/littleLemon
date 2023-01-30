import restauranfoodsquare from "../assets/restauranfoodsquare.jpg";

const Hero = () => {
  return (
    <section className="hero-section-container">
      <div className="hero-container">
        <h1>Little Lemon</h1>
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
      <div className="hero-image-container">
        <img src={restauranfoodsquare} alt="restaurant"></img>
      </div>
    </section>
  );
};

export default Hero;
