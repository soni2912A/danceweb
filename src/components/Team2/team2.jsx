import React from "react";
import "./team2.css";

import g1 from "../../assets/images/g1.jpg";
import homep from "../../assets/images/homep.jpg";
import g4 from "../../assets/images/about.jpg";
import d5 from "../../assets/images/d5.jpg";
import b2 from "../../assets/images/b2.jpg";
import our from "../../assets/images/ourpromise.jpg"
const Team2 = () => {
  return ( <> 
    <section className="classes-section">

      {/* LEFT SIDE */}
      <div className="classes-left">
        <h2>Booking Experience for Classes</h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="classes-right">

        {/* CARD 1 */}
        <div className="card">
          <div className="img-wrap">
            <img src={g1} alt="Hip Hop Foundations" />
            <span className="img-label">C1</span>
          </div>
          <div className="card-content">
            <h3>Hip Hop Foundations</h3>
            <p>
              This class introduces hip hop dance, including isolations,
              popping, locking, and basic footwork.
            </p>
           <div className="card-bottom">
  <span className="time">Tuesday 7:00 PM – 9:00 PM</span>
  <button className="book">Book Now</button>
</div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <div className="img-wrap">
            <img src={homep} alt="Hip Hop Freestyle" />
            <span className="img-label">C2</span>
          </div>
          <div className="card-content">
            <h3>Hip Hop Freestyle</h3>
            <p>
              This class helps you develop your own unique movement vocabulary
              and respond to music in the moment.
            </p>
           <div className="card-bottom">
  <span className="time">Tuesday 7:00 PM – 9:00 PM</span>
  <button className="book">Book Now</button>
</div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <div className="img-wrap">
            <img src={g4} alt="Jazz Technique" />
            <span className="img-label">C4</span>
          </div>
          <div className="card-content">
            <h3>Jazz Technique</h3>
            <p>
              This class focuses on classic jazz styles while building strength,
              flexibility, and musicality.
            </p>
           <div className="card-bottom">
  <span className="time">Tuesday 7:00 PM – 9:00 PM</span>
  <button className="book">Book Now</button>
</div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="card">
          <div className="img-wrap">
            <img src={d5} alt="Jazz Funk" />
            <span className="img-label">D5</span>
          </div>
          <div className="card-content">
            <h3>Jazz Funk</h3>
            <p>
              This class is perfect for those who love to dance with power and <br />
              attitude.
            </p>
           <div className="card-bottom">
  <span className="time">Tuesday 7:00 PM – 9:00 PM</span>
  <button className="book">Book Now</button>
</div>
          </div>
        </div>

        {/* FULL WIDTH CARD */}
        <div className="card-full">
          <div className="img-wrap1">
            <img src={b2} alt="Contact Improvisation" />
            <span className="img-label">B2</span>
          </div>
          <div className="card-content1">
            <h3>Contact Improvisation</h3>
            <p>
              This class focuses on movement through touch and weight sharing.
            </p>
           <div className="card-bottom1">
  <span className="time1">Tuesday 7:00 PM – 9:00 PM</span>
  <button className="book1">Book Now</button>
</div>
          </div>
        </div>

      </div>

    </section>


    <section className="promise-section">
      <div className="promise-left">
        <h2>Our Promise</h2>
      </div>



      <div className="promise-image">
        <div><p>
          Whether you're a beginner looking to explore expressive movement or an advanced dancer ready to refine your technique, we have classes for you! </p></div>
      <img src={our} alt="Our Promise Dance" />
      </div>

    </section>
     </>
    

    
    
  );

};

export default Team2;
