import "./App.scss";

import cat1 from "./assets/cat-1.jpeg";
import cat2 from "./assets/cat-2.jpeg";
import cat3 from "./assets/cat-3.jpeg";
import cat4 from "./assets/cat-4.jpeg";
import bookmark from "./assets/bookmark.svg";
import bookmark2 from "./assets/bookmark-2.svg";

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

            <div className="cart-logo">cart logo</div>
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
    </div>
  );
}

export default App;
