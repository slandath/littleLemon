import "./App.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import BookingPage from "./Components/BookingPage";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <div className="main-container">
        <Nav />
        <Hero />
        <Main />
        <Testimonials />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
