import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        {/* Your main content or Routes */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
