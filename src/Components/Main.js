import SpecialList from "./SpecialList";
import Testimonials from "./Testimonials";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Nav />
      <Hero />
      <main className="specials-container" id="menu">
        <div className="specials-header-container">
          <h2> This weeks specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="dish-container">
          <SpecialList />
        </div>
      </main>
      <Testimonials />
      <About />
      <Footer />
    </>
  );
};

export default Main;
