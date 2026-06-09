import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhyUs from "./Pages/WhyUs";
import MainLayout from "./Layout/MainLayout";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Careers from "./Pages/Career";
import CareerForm from "./Components/CareerComponents/CareerForm";
import Contact from "./Pages/Contact";
import Plywood from "./Pages/Plywood";
import Soap from "./Pages/Soap";
import CookingOil from "./Pages/CookingOil";
import Packaging from "./Pages/Packaging";
import Business from "./Pages/Business";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/why_us" element={<WhyUs />} />
          <Route path="/business" element={<Business />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/career/apply" element={<CareerForm />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/services/plywood" element={<Plywood />} />
          <Route path="/services/soap" element={<Soap />} />
          <Route path="/services/cooking-oil" element={<CookingOil />} />
          <Route path="/services/packaging" element={<Packaging />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
