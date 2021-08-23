import React from "react";
import { useEmblaCarousel } from "embla-carousel/react";
// import "../embla.scss";
import cat1 from "../assets/cat-1.jpeg";
import cat2 from "../assets/cat-2.jpeg";
import cat3 from "../assets/cat-3.jpeg";
import cat4 from "../assets/cat-4.jpeg";
import bookmark from "../assets/bookmark.svg";
import bookmark2 from "../assets/bookmark-2.svg";

const Shop = () => {
  // const [shopref] = useEmblaCarousel();
  return (
    <div className="embla">
      <div className="embla__container">
        <section className="shop ">
          <div className="shop-items embla__slide">
            <img src={cat1} alt="Multivitamin" className="cat-1 cat" />
            <p>Shop Multivitamin</p>
          </div>

          <div className="shop-items embla__slide ">
            <div className="bookmark">
              <img src={bookmark} alt="bookmark" />
            </div>
            <img src={cat2} alt="Protein" className="cat-1 cat" />
            <p>Shop Protein</p>
          </div>

          <div className="shop-items embla__slide">
            <img src={cat3} alt="Pregnency" className="cat-1 cat" />
            <p>Shop Pregnency</p>
          </div>

          <div className="shop-items embla__slide">
            <div className="bookmark bookmark2">
              <img src={bookmark2} alt="bookmark" />
            </div>
            <img src={cat4} alt="Bundles" className="cat-1 cat" />
            <p>Shop Bundles</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shop;
