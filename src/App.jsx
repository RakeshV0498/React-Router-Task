import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FSDcomp from "./Pages/FSD";
import DSComp from "./Pages/DS";
import CSComp from "./Pages/CS";
import CCComp from "./Pages/CC";

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
