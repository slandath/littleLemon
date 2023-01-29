import Card from "./Card";

const SpecialList = () => {
  const specials = [
    {
      name: "Greek Salad",
      price: 12.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu elit, posuere nec lorem eu, cursus lobortis libero. Etiam sit amet mattis lorem, in dapibus augue.",
      imageURL: require("../assets/greeksalad.jpg"),
    },
    {
      name: "Bruchetta",
      price: 5.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu elit, posuere nec lorem eu, cursus lobortis libero. Etiam sit amet mattis lorem, in dapibus augue.",
      imageURL: require("../assets/bruchetta.jpg"),
    },
    {
      name: "Lemon Dessert",
      price: 4.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu elit, posuere nec lorem eu, cursus lobortis libero. Etiam sit amet mattis lorem, in dapibus augue.",
      imageURL: require("../assets/lemondessert.jpg"),
    },
  ];
  return (
    <>
      {specials.map((special) => (
        <Card
          imageURL={special.imageURL}
          name={special.name}
          price={special.price}
          description={special.description}
        />
      ))}
    </>
  );
};

export default SpecialList;
