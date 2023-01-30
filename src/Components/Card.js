const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.imageURL} alt="dish" />
      <h3 className="card-title">{props.name}</h3>
      <h4 className="card-price">${props.price}</h4>
      <p className="card-body">{props.description}</p>
      <div className="card-btn-container">
        <button className="order-btn">Order a delivery</button>
      </div>
    </div>
  );
};

export default Card;
