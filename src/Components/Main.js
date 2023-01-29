import SpecialList from "./SpecialList";

const Main = () => {
  return (
    <main className="specials-container">
      <div className="specials-header-container">
        <h2> This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="dish-container">
        <SpecialList />
      </div>
    </main>
  );
};

export default Main;
