const BookingForm = (props) => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const occasions = ["Birthday", "Anniversary", "Other"];

  return (
    <>
      <div className="booking-form-container">
        <form className="resform" onSubmit={props.formHandler}>
          <input
            label="Reservation Date"
            name="resdate"
            type="date"
            id="resdate"
            onChange={props.dateChangeHandler}
            value={props.resdate}
            required
          ></input>

          <select
            label="res-time"
            id="restime"
            onChange={props.timeChangeHandler}
            type="time"
            name="restime"
            value={props.restime}
            required
          >
            {availableTimes.map((time, index) => {
              return <option key={index}>{time}</option>;
            })}
          </select>

          <input
            label="Number of Guests"
            name="resguest"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            onChange={props.guestChangeHandler}
            value={props.resguest}
            required
          ></input>

          <select
            label="Occasion"
            id="occasion"
            name="resoccasion"
            onChange={props.occasionChangeHandler}
            value={props.resoccasion}
            required
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
