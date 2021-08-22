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

            <div className="cart-logo">{/* <img src={cart} alt="" /> */}</div>
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

      <section className="shop">
        <div className="shop-items">
          <img src={cat1} alt="" className="cat-1 cat" />
          <p>Shop Multivitamin</p>
        </div>
        <div className="shop-items ">
          <div className="bookmark">
            <img src={bookmark} alt="" />
          </div>
          <img src={cat2} alt="" className="cat-1 cat" />
          <p>Shop Protein</p>
        </div>
        <div className="shop-items">
          <img src={cat3} alt="" className="cat-1 cat" />
          <p>Shop Pregnency</p>
        </div>
        <div className="shop-items">
          <div className="bookmark bookmark2">
            <img src={bookmark2} alt="" />
          </div>
          <img src={cat4} alt="" className="cat-1 cat" />
          <p>Shop Bundles</p>
        </div>
      </section>

      <section className="info">
        <h2 className="title">Daily essentials with good intentions — for living life or creating it.</h2>

        <div className="more-info">
          <div className="wrapper">
            <div className="icon-container">
              <img src={circleArrow} alt="" className="icon" />
            </div>
            <div className="text">
              Traceable <br />
              Ingredients
            </div>
          </div>
          <div className="wrapper">
            <div className="icon-container">
              <img src={nogmo} alt="" className="icon" />
            </div>
            <div className="text">Non-GMO</div>
          </div>
          <div className="wrapper">
            <div className="icon-container">
              <img src={gaurd} alt="" className="icon" />
            </div>
            <div className="text">Third Party Tested</div>
          </div>
          <div className="wrapper">
            <div className="icon-container">
              <img src={plant} alt="" className="icon" />
            </div>
            <div className="text">Vegan</div>
          </div>
          <div className="wrapper">
            <div className="icon-container">
              <img src={drop} alt="" className="icon" />
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
            <img src={whoweare} alt="" />
          </div>
          <div className="text">
            <h1>
              We're not about <br /> pseudoscience and half- <br />
              truths
            </h1>
            <p>
              From Omega-3 DHA from microalgae to regeneratively -<br /> farmed pea protein, our scientists studied diets and genetics <br /> to make daily essentials based on what we need
            </p>
            <a href="">Who We Are</a>
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
            <a href="">Meet Our Ingredients</a> <br />
            <a href="">Our Clinical Study</a>
          </div>
          <div className="img-container">
            <img src={map} alt="" />
          </div>
        </div>
      </section>

      <section className="featured-product">
        <div className="title">
          <h1>Featured Products</h1>
        </div>
        <div className="link">
          <a href="">Shop All</a>
        </div>
      </section>
    </div>
  );
}

export default App;
