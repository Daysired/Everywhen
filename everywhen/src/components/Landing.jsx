import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <section class="about__section" id="about">
        <div class="about__container">
          <div class="about__data">
            <h2 class="about__title">Who We Are</h2>
            <p class="about__description">
              Everywhen is a mental health assessment and tracking application.
              It allows users to take a mental health assessment and save the
              results for their review and reflection. This in turn allows them
              to keep track of their mental health progress and coping
              strategies.
            </p>
          </div>
          <img src="images/AboutUsPic.png" alt="" class="about__img" />
        </div>
      </section>

      <section className="how-section">
        <h2 className="how-it-works-title">How It Works</h2>
        <div className="step-divs">
          <img src="images/step1.png" alt="" class="step__img" />
          <div className="step-text">
            <h2 className="h2-steps">Step 1</h2>
            <p className="step-description">Get to know us. Read our "Who We Are" section.</p>
          </div>
        </div>

        <div className="step-divs">
          <img src="images/step2.png" alt="" className="step__img" />
          <div className="step-text">
            <h2 className="h2-steps">Step 2</h2>
            <p className="step-description">Take our mental health assessment. It only takes 2-4 minutes.</p>
          </div>
        </div>

        <div className="step-divs">
          <img src="images/step3.png" alt="" className="step__img" />
          <div className="step-text">
            <h2 className="h2-steps">Step 3</h2>
            <p className="step-description">Review the assessment results saved in card form.
              Use the cards as records to keep track of your progress.</p>
          </div>

          {/* <div className="plants-div">
            <img src="images/plant.png" alt="" className="plants__img" />
            <img src="images/plant.png" alt="" className="plants__img" />
          </div> */}
        </div>
      </section>
      
      <section class="get-started__section" id="start">

        <div class="get-started__container">

          <div className="img1">
            <img src="images/girl&plant.png" alt="" class="girlplant__img" />
          </div>

          <div class="get-started__data">
            <h2 class="start__title">Start Healing Today</h2>
            <p class="start__description">Click to Get Started.</p>
          </div>

          <div className="image2">
            <img src="images/guy&plant.png" alt="" class="guyplant__img" />
          </div>

        </div>

      </section>

    </div>
  );
};

export default Landing;
