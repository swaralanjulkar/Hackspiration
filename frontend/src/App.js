import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
// import CropAna from "./pages/CropAna";
import CropPred from "./pages/CropPred";
import CropPrice from "./pages/CropPrice";
import Crops from "./pages/Crops";
import FertilizerPred from "./pages/FertilizerPred";
import GovtSchemes from "./pages/GovtSchemes";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* <Route path="/CropAna" element={<CropPrice />} exact /> */}
          <Route path="/CropPred" element={<CropPred />} exact />
          <Route path="/FertilizerPred" element={<FertilizerPred />} exact />
          <Route path="/govtschemes" element={<GovtSchemes />} exact />
          <Route path="/weather" element={<Weather />} exact />
          <Route path="/ourteam" element={<OurTeam />} exact />
          <Route path="/priceforecast/:crop" element={<CropPrice />} />
          <Route path="/priceforecast" element={<Crops />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
