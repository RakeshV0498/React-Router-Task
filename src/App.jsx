import "./App.css";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FSDcomp from "./Components/Pages/FSD";
import DSComp from "./Components/Pages/DS";
import CSComp from "./Components/Pages/CS";
import CCComp from "./Components/Pages/CC";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FSD" element={<FSDcomp />} />
          <Route path="/DS" element={<DSComp />} />
          <Route path="/CS" element={<CSComp />} />
          <Route path="/CC" element={<CCComp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
