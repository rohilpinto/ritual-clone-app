import React from "react";
// import { useEmblaCarousel } from "embla-carousel/react";
// import "../embla.scss";
import Content from "./Content";

import vitaminfirst from "../assets/vitamins-first.jpeg";
import prenatalvitamins from "../assets/prennatal-vitamin.jpeg";
import vitamins from "../assets/vitamins.jpeg";
import dailyshake from "../assets/daily-shake.jpeg";
import firstHoverImage from "../assets/first-hover-img.jpeg";
import secondHoverImage from "../assets/second-hover-img.jpeg";
import thirdHoverImage from "../assets/third-hover-img.jpeg";
import fourthHoverImage from "../assets/fourth-hover-img.jpeg";

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

const FeaturedProduct = () => {
  return (
    <section className="featured-product">
      <div className="title-wrapper">
        <div className="title">
          <h1>Featured Products</h1>
        </div>
        <div className="link">
          <a href="https://google.com">Shop All</a>
        </div>
      </div>

      <div className="images-wrapper">
        {imgData.map((obj) => {
          return <Content obj={obj} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedProduct;
