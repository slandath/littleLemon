import { useState } from "react";
import BookingForm from "./BookingForm";
import Nav from "./Nav";
import Footer from "./Footer";

const BookingPage = (props) => {
  const [resdate, setResdate] = useState("");
  const [resguest, setResguest] = useState("");
  const [restime, setRestime] = useState("");
  const [resoccasion, setResoccasion] = useState("");

  const dateChangeHandler = (e) => {
    setResdate(e.target.value);
  };
  const guestChangeHandler = (e) => {
    setResguest(e.target.value);
  };
  const timeChangeHandler = (e) => {
    setRestime(e.target.value);
  };
  const occasionChangeHandler = (e) => {
    setResoccasion(e.target.value);
  };

  function formHandler(e) {
    e.prevent.default();
    alert("Booked!");
  }

  return (
    <>
      <Nav />
      <div className="booking-container">
        <h1>Please choose the date for your reservation</h1>
        <br />
        <BookingForm />;
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
