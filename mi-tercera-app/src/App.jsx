import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/services/algo" element={<Services />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
