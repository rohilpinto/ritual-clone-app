import React from "react";

import cleansimple from "../assets/clean&simple.jpeg";

import freeshipping from "../assets/freeshipping.svg";
import deliverydata from "../assets/deliverydata.svg";
import thirtyday from "../assets/30-day.svg";
import cancel from "../assets/cancellation.svg";

const ClearAndSimple = () => {
  return (
    <section className="clear-and-simple">
      <div className="image-container">
        <img src={cleansimple} alt="cleansimple" />
      </div>
      <div className="title">
        <h1>Clean and simple, delivered</h1>
        <p>
          Easy-to-start. Easy-to-cancel. Our team of <br /> scientists and nutritional experts are on a <br /> mission to turn your new healthy habit into a <br /> Ritual.*
        </p>

        <div className="list">
          <img src={freeshipping} alt="freeshipping" />
          <p>Free shipping</p>
        </div>
        <div className="list">
          <img src={deliverydata} alt="deliverydata" />
          <p>Control your delivery date</p>
        </div>
        <div className="list">
          <img src={cancel} alt="cancel" />
          <p>Free and easy cancellation</p>
        </div>
        <div className="list">
          <img src={thirtyday} alt="thirtyday" />
          <p>30-day money back guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default ClearAndSimple;
