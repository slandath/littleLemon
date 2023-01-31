import BookingForm from "./BookingForm";
import Nav from "./Nav";
import Footer from "./Footer";

const BookingPage = (props) => {
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
