import React, { useState, useEffect } from "react";
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
import BlogPage from "./Pages/Blogpage";
import BlogSinglePage from "./Pages/BlogSinglePage";
import { BlogContext } from "./Components/BlogComponents/BlogContext";
import api from "./services/api";
import { Toaster } from "react-hot-toast";
import PalmKernel from "./Pages/PalmKernel";

const App = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await api.get("/posts/published");

        setBlog(data);
      } catch (error) {
        console.error("Failed to load posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  return (
    <BlogContext.Provider value={{ blog, setBlog, loading }}>
      <Toaster position="top-right" />
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
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogSinglePage />} />
            <Route path="/services/plywood" element={<Plywood />} />
            <Route path="/services/soap" element={<Soap />} />
            <Route path="/services/cooking-oil" element={<CookingOil />} />
            <Route path="/services/packaging" element={<Packaging />} />
            <Route path="/services/pk" element={<PalmKernel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BlogContext.Provider>
  );
};

export default App;
