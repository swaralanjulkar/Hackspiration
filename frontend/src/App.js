import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./components/Weather";
import CropAna from "./pages/CropAna";
import CropPred from "./pages/CropPred";
import FertilizerPred from "./pages/FertilizerPred";
import GovtSchemes from "./pages/GovtSchemes";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
    <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/CropAna" element={<CropAna />} exact />
            <Route path="/CropPred" element={<CropPred />} exact />
            <Route path="/FertilizerPred" element={<FertilizerPred />} exact />
            <Route path="/govtschemes" element={<GovtSchemes />} exact />
            <Route path="/weather" element={<Weather />} exact />
          </Routes>
      </Router>
    </>
  );
};

export default App;
