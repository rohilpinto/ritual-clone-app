// import { useState } from "react";

import "./App.scss";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Info from "./components/Info";
import WhoWeAre from "./components/WhoWeAre";
import FeaturedProduct from "./components/FeaturedProduct";
import ClearAndSimple from "./components/ClearAndSimple";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className="max-width">
        <Shop />
        <Info />
        <WhoWeAre />
        <FeaturedProduct />
        <ClearAndSimple />
      </div>
    </div>
  );
}

export default App;
