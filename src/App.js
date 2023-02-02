import "./App.css";
import Main from "./Components/Main";
import BookingPage from "./Components/BookingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="reserve" element={<BookingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
