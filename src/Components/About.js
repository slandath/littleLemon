import marioadrian from "../assets/marioadrian.jpg";

const About = () => {
  return (
    <section className="about-section-container" id="about">
      <div className="about-container">
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
      <div className="about-image-container">
        <img src={marioadrian} alt="restaurant"></img>
      </div>
    </section>
  );
};

export default About;
