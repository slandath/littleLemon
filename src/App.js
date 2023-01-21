import "./App.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Header";
import Highlights from "./Components/Main";
import Footer from "./Components/Footer";
import BookingPage from "./Components/BookingPage";

function App() {
  return (
    <>
      <div className="main-container">
        <Nav />
        <Hero />
        <Highlights />
        <BookingPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
