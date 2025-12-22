import React from "react";
import founder1 from "../../assets/images/founder1.png";
import Founder from "../../assets/images/founder2.png";
import Studio from "../../assets/images/studio.png";
import "./Team.css";

function Team() {
  return (
    <>
      <section className="team">
        <div className="soni1">
          <div>
            <div className="founder-card">
              <div className="soni2">
                <h2>Founders</h2>
              </div>
            </div>
          </div>

          <div>
            <div className="founder-card">
              <img src={founder1} alt="Team" />
              <div className="info purple">
                <h3>Sophia Bennett</h3>
                <p>Founder & Instructor</p>
              </div>
            </div>
          </div>

          <div>
            <div className="founder-card">
              <img src={Founder} alt="Team" />
              <div className="info blue">
                <h3>Alisa Morris</h3>
                <p>Founder & Program Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="instructors-section">

        <div className="instructors-left">
          <h2>Instructors</h2>
        </div>

        <div className="instructors-right">

          <div className="instructor-card">
            <h3>Maya Rodriguez</h3>
            <p className="role">Modern & Contemporary Instructor</p>
            <p className="desc">
              Maya's passion for modern and contemporary dance is infectious. With a background in performance and choreography, she brings a dynamic and expressive approach to her classes. She has been immersed in the culture for over a decade, mastering various styles from old-school grooves to contemporary beats. 

            </p>
          </div>

          <div className="instructor-card">
            <h3>Kai Chen</h3>
            <p className="role">Hip Hop Foundations & Freestyle Instructor</p>
            <p className="desc">
              Kai's energy and love for hip hop are undeniable. He has been immersed in the culture for over a decade, mastering various styles from old-school grooves to contemporary beats. Kai's classes are a blend of technical instruction and creative freedom, encouraging students to develop their own unique style.

            </p>
          </div>

          <div className="instructor-card">
            <h3>Lena Evans</h3>
            <p className="role">Jazz Technique & Jazz Funk Instructor</p>
            <p className="desc">
              Lena brings a vibrant and dynamic energy to her jazz classes. With a strong foundation in classical jazz technique, she also loves to explore the funky, high-energy side of the style. Lena's classes focus on building strength, flexibility, and musicality, while also encouraging students to express their personality through movement.

            </p>
          </div>

          <div className="instructor-card">
            <h3>Noah Sinclair</h3>
            <p className="role">Improvisation for Performance Instructor</p>
            <p className="desc">
              Noah is a master of spontaneous movement and connection. He has a deep understanding of contact improvisation and its ability to foster trust and communication through touch and weight sharing. His classes are a journey of exploration, encouraging dancers to listen to their bodies and connect with others in a meaningful way.

            </p>
          </div>

          <div className="instructor-card">
            <h3>Jasmine Patel</h3>
            <p className="role">Modern & Contemporary Instructor</p>
            <p className="desc">
              Jasmine has a gift for making modern dance accessible and enjoyable for beginners. Her classes are a gentle introduction to the fundamental principles of modern movement, focusing on body awareness, grounding, and creative exploration. 

            </p>
          </div>

          <div className="instructor-card">
            <h3>Ricky Gomez</h3>
            <p className="role">Hip Hop Choreography Instructor</p>
            <p className="desc">
              Ricky brings a contagious passion and a wealth of experience to his hip hop choreography classes. He has worked with numerous dance crews and artists, developing a sharp eye for detail and a knack for creating dynamic and engaging routines.

            </p>
          </div>

        </div>
      </section>
      {/* Our Space Section */}
<section className="ourspace-section">

  {/* LEFT BIG STUDIO IMAGE */}
  <div className="studio-left">
    <img src={Studio} alt="studio space" />
  </div>

  {/* RIGHT TEXT PANEL */}
  <div className="studio-right">
    <h2>Our Space</h2>

    <p>
      Whether you’re a beginner looking to explore expressive movement or an 
      advanced dancer ready to refine your technique, we have classes for you! 
      Join our weekly sessions, <span className="our-spacep">drop in for open level classes</span> , or take part 
      in our upcoming choreography series. Don’t miss our special Masterclasses 
      with visiting guest artists! Maximum 10 students. Saturday Limited spots available.
    </p>
  </div>

</section>

    </>
  );
}

export default Team;
