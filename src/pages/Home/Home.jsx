import React from "react";
import "./home.css";
import homeImage from "../../assets/images/h";

function Home() {
  return (
    <section className="home">
      <div className="overlay">
        <img src={homeImage} alt="home background" className="home-bg" />
        <div className="content">
          <h1 className="title">Find your flow.</h1>
          {/* <p className="subtitle">New Contemporary Dance Classes Now Enrolling</p> */}
          <button className="btn">Reserve your spot</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
