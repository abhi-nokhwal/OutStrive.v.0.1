import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contectus from "./pages/Contectus";
import Aboutus from "./pages/Aboutus";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-out", once: false });
  }, []);
  return (
    <Router basename="/OutStrive">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Contectus" element={<Contectus />} />
          <Route path="/about" element={<Aboutus />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
