import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import whoweare from "../assets/who-we-are.jpeg";
import map from "../assets/map.jpeg";

const Whoweare = () => {
  return (
    <section className="who-we-are">
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
        <div className="bg-circle"></div>
      </ScrollAnimation>

      <div className="content-container">
        <div className="img-container">
          <img src={whoweare} alt="whoweare" />
        </div>
        <div className="text">
          <h1>
            We're not about <br /> pseudoscience and half- <br />
            truths
          </h1>
          <p>
            From Omega-3 DHA from microalgae to regeneratively -<br /> farmed pea protein, our scientists studied diets and genetics <br /> to make daily essentials based on what we need
          </p>
          <a href="https://google.com">Who We Are</a>
        </div>
      </div>

      <div className="content-container content-container-2">
        <div className="text">
          <h1>You deserve traceability</h1>
          <p>
            We share our sources, studies, and suppliers — daily <br />
            essentials backed by the first visible supply chain of its <br />
            kind.
          </p>
          <a href="https://google.com">Meet Our Ingredients</a> <br />
          <a href="https://google.com">Our Clinical Study</a>
        </div>
        <div className="img-container">
          <img src={map} alt="map" />
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
