import { useState } from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  const [resdate, setResdate] = useState("");

  const changeHandler = (e) => {
    setResdate(e.target.value);
  };

  return (
    <>
      <div className="booking-container">
        <h3>Please choose the date for your reservation</h3>
        <label htmlFor="res-date"></label>
        <input
          name="resdate"
          type="date"
          id="res-date"
          onChange={changeHandler}
          value={resdate}
        ></input>
        <BookingForm />;
      </div>
    </>
  );
};

export default BookingPage;
