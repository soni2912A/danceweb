// import React from "react";
// import Navbar from "./components/navbar";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   );
// }

// export default App;



import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Footer />
      <Home/>
      {/* Other sections */}
    </>
  );
}

export default App;