const Review = (props) => {
  return (
    <div className="review-container">
      <div className="review-name-container">
        <h3 className="review-name">{props.name}</h3>
      </div>
      <h4 className="review-date">{props.date}</h4>
      <div className="review-rating-container">
        <h4 className="review-rating">{props.rating}</h4>
      </div>
      <p className="review-comments">{props.comment}</p>
    </div>
  );
};

export default Review;
