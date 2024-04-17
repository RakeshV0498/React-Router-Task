import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  const categories = [
    "All",
    "Full Stack Development",
    "Data Science",
    "Cyber Security",
    "Carrer",
  ];
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {categories.map((category) => (
        <Link key={category} to={category}>
          {category}
        </Link>
      ))}
    </>
  );
}

export default App;
