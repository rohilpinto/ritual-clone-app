import React from "react";

import circleArrow from "../assets/circle-arrow.svg";
import nogmo from "../assets/none.svg";
import gaurd from "../assets/gaurd.svg";
import plant from "../assets/plant.svg";
import drop from "../assets/drop.svg";


const Info = () => {
  return (
    <section className="info">
      <h2 className="title">Daily essentials with good intentions — for living life or creating it.</h2>

      <div className="more-info">
        <div className="wrapper">
          <div className="icon-container">
            <img src={circleArrow} alt="circleArrow" className="icon" />
          </div>
          <div className="text">
            Traceable <br />
            Ingredients
          </div>
        </div>
        <div className="wrapper">
          <div className="icon-container">
            <img src={nogmo} alt="nogmo" className="icon" />
          </div>
          <div className="text">Non-GMO</div>
        </div>
        <div className="wrapper">
          <div className="icon-container">
            <img src={gaurd} alt="gaurd" className="icon" />
          </div>
          <div className="text">Third Party Tested</div>
        </div>
        <div className="wrapper">
          <div className="icon-container">
            <img src={plant} alt="plant" className="icon" />
          </div>
          <div className="text">Vegan</div>
        </div>
        <div className="wrapper">
          <div className="icon-container">
            <img src={drop} alt="drop" className="icon" />
          </div>
          <div className="text">
            No Artificial <br /> Flavors or <br /> Synthetic Fillers
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
