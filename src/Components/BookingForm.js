import { useRef } from "react";

const BookingForm = () => {
  const restimeRef = useRef("");
  const resguestRef = useRef("");
  const resoccasionRef = useRef("");

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const occasions = ["Birthday", "Anniversary", "Other"];

  function formHandler(e) {
    e.prevent.default();
    alert("Booked!");
  }

  return (
    <>
      <form className="resform" onSubmit={formHandler}>
        <label htmlFor="res-time">Available Times</label>
        <select id="res-time" ref={restimeRef} name="restime">
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
          ref={resguestRef}
        ></input>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="resoccasion" ref={resoccasionRef}>
          {occasions.map((occasion, index) => {
            return <option key={index}>{occasion}</option>;
          })}
        </select>
        <input type="submit" value="Make Your Reservation"></input>
      </form>
    </>
  );
};

export default BookingForm;
