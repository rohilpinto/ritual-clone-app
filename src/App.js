// import { useState } from "react";

import "./App.scss";

import cat1 from "./assets/cat-1.jpeg";
import cat2 from "./assets/cat-2.jpeg";
import cat3 from "./assets/cat-3.jpeg";
import cat4 from "./assets/cat-4.jpeg";
import bookmark from "./assets/bookmark.svg";
import bookmark2 from "./assets/bookmark-2.svg";
import cart from "./assets/cart.svg";
import circleArrow from "./assets/circle-arrow.svg";
import nogmo from "./assets/none.svg";
import gaurd from "./assets/gaurd.svg";
import plant from "./assets/plant.svg";
import drop from "./assets/drop.svg";
import whoweare from "./assets/who-we-are.jpeg";
import map from "./assets/map.jpeg";

import vitaminfirst from "./assets/vitamins-first.jpeg";
import prenatalvitamins from "./assets/prennatal-vitamin.jpeg";
import vitamins from "./assets/vitamins.jpeg";
import dailyshake from "./assets/daily-shake.jpeg";

import firstHoverImage from "./assets/first-hover-img.jpeg";
import secondHoverImage from "./assets/second-hover-img.jpeg";
import thirdHoverImage from "./assets/third-hover-img.jpeg";
import fourthHoverImage from "./assets/fourth-hover-img.jpeg";

import cleansimple from "./assets/clean&simple.jpeg";

import freeshipping from "./assets/freeshipping.svg";
import deliverydata from "./assets/deliverydata.svg";
import thirtyday from "./assets/30-day.svg";
import cancel from "./assets/cancellation.svg";

import Content from "./components/Content";

const imgData = [
  {
    id: "1",
    smallTitle: "Essential for Women",
    title: "Multivitamin 18+",
    desc: "The clinical-backed multivitamin, reimagined for women 18+.",
    img: vitaminfirst,
    onHoverImg: firstHoverImage,
  },
  {
    id: "2",
    smallTitle: "Essential for Women",
    title: "Prenatal Multivitamin",
    desc: "The clinical-backed multivitamin, reimagined for women 18+.",
    img: prenatalvitamins,
    onHoverImg: secondHoverImage,
  },
  {
    id: "3",
    smallTitle: "Essential Protein",
    title: "Daily Shake 18+",
    desc: "The clinical-backed multivitamin, reimagined for women 18+.",
    img: dailyshake,
    onHoverImg: thirdHoverImage,
  },
  {
    id: "4",
    smallTitle: "Essential for Men",
    title: "Multivitamin 18+",
    desc: "The clinical-backed multivitamin, reimagined for women 18+.",
    img: vitamins,
    onHoverImg: fourthHoverImage,
  },
];

function App() {
  return (
    <div className="App">
      <section className="nav">
        <div className="nav-items">
          <div className="start-wrapper wrapper">
            <p>Menu</p>
          </div>
          <h1>Ritual</h1>

          <div className="end-wrapper wrapper">
            <p>Who We Are</p>

            <div className="cart-logo">
              <img src={cart} alt="cart-logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="hero-container">
          <div className="title">
            <h1>The future</h1>
            <h1>of health</h1>
            <h1>— is clear.</h1>

            <div className="btn-container">
              <button className="btn">Shop All</button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-width">
        <section className="shop">
          <div className="shop-items">
            <img src={cat1} alt="Multivitamin" className="cat-1 cat" />
            <p>Shop Multivitamin</p>
          </div>
          <div className="shop-items ">
            <div className="bookmark">
              <img src={bookmark} alt="bookmark" />
            </div>
            <img src={cat2} alt="Protein" className="cat-1 cat" />
            <p>Shop Protein</p>
          </div>
          <div className="shop-items">
            <img src={cat3} alt="Pregnency" className="cat-1 cat" />
            <p>Shop Pregnency</p>
          </div>
          <div className="shop-items">
            <div className="bookmark bookmark2">
              <img src={bookmark2} alt="bookmark" />
            </div>
            <img src={cat4} alt="Bundles" className="cat-1 cat" />
            <p>Shop Bundles</p>
          </div>
        </section>

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

        <section className="who-we-are">
          <div className="bg-circle"></div>

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
              <a href="#">Who We Are</a>
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
              <a href="#">Meet Our Ingredients</a> <br />
              <a href="#">Our Clinical Study</a>
            </div>
            <div className="img-container">
              <img src={map} alt="map" />
            </div>
          </div>
        </section>

        <section className="featured-product">
          <div className="title-wrapper">
            <div className="title">
              <h1>Featured Products</h1>
            </div>
            <div className="link">
              <a href="#">Shop All</a>
            </div>
          </div>

          <div className="images-wrapper">
            {imgData.map((obj) => {
              return <Content obj={obj}></Content>;
            })}
          </div>
        </section>

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
      </div>
    </div>
  );
}

export default App;
