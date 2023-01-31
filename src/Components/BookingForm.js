import { useState } from "react";

const BookingForm = () => {
  const [resdate, setResdate] = useState("");
  const [resguest, setResguest] = useState("");
  const [restime, setRestime] = useState("");
  const [resoccasion, setResoccasion] = useState("");

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const occasions = ["Birthday", "Anniversary", "Other"];

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
      <div className="booking-form-container">
        <form className="resform" onSubmit={formHandler}>
          <label htmlFor="res-date">Date</label>
          <input
            name="resdate"
            type="date"
            id="res-date"
            onChange={dateChangeHandler}
            value={resdate}
          ></input>

          <label htmlFor="res-time">Available Times</label>
          <select
            id="res-time"
            onChange={timeChangeHandler}
            name="restime"
            value={restime}
          >
            {availableTimes.map((time, index) => {
              return <option key={index}>{time}</option>;
            })}
          </select>

          <label htmlFor="guests">Number of Guests</label>
          <input
            name="resguest"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            onChange={guestChangeHandler}
            value={resguest}
          ></input>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="resoccasion"
            onChange={occasionChangeHandler}
            value={resoccasion}
          >
            {occasions.map((occasion, index) => {
              return <option key={index}>{occasion}</option>;
            })}
          </select>
          <button type="submit">Make Your Reservation</button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
