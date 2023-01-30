import Review from "./Review";

const CustomerReviews = () => {
  const mealReviews = [
    {
      date: "11/01/2022",
      name: "John and Liz",
      rating: "4 / 5",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu elit, posuere nec lorem eu, cursus lobortis libero.",
    },
    {
      date: "11/30/2022",
      name: "Dale",
      rating: "5 / 5",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu elit, posuere nec lorem eu, cursus lobortis libero.",
    },
    {
      date: "12/05/2022",
      name: "Jennifer",
      rating: "5 / 5",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu elit, posuere nec lorem eu, cursus lobortis libero.",
    },
    {
      date: "12/18/2022",
      name: "Paul and Melissa",
      rating: "4 / 5",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu elit, posuere nec lorem eu, cursus lobortis libero.",
    },
    {
      date: "12/22/2022",
      name: "Ashley and Maddie",
      rating: "5 / 5",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu elit, posuere nec lorem eu, cursus lobortis libero.",
    },
  ];
  return (
    <>
      {mealReviews.map((mealReview) => (
        <Review
          date={mealReview.date}
          name={mealReview.name}
          rating={mealReview.rating}
          comment={mealReview.comment}
        />
      ))}
    </>
  );
};

export default CustomerReviews;
