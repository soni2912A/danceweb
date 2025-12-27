import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./pages/Home/Home";
// import Class from "./pages/Class/ClassMani";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import ClassMani from "./pages/Class/ClassMani";


function App() {
  return (
    <div className="app-container">
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class" element={<ClassMani />} />
        <Route path="/about" element={ <About/>} />
      
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
