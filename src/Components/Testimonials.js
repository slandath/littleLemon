import CustomerReviews from "./CustomerReviews";

const Testimonials = () => {
  return (
    <main className="specials-container">
      <div className="specials-header-container">
        <h2>Testimonials</h2>
      </div>
      <div class="dish-container">
        <CustomerReviews />
      </div>
    </main>
  );
};

export default Testimonials;
