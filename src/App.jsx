import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./pages/Home/Home";
import Hero from "./components/Hero-section/hero";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/* <Hero/> */}
      <div className="content">
        {/* Your main content or Routes */}
        <Home/>
      </div>
      <Footer />
    </div>
  


);

}

export default App;
