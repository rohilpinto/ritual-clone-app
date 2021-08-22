import React, { useState } from "react";

const Content = ({ obj }) => {
  const [img, setImg] = useState(false);
  return (
    <div className="content" onMouseEnter={() => setImg(true)} onMouseLeave={() => setImg(false)}>
      <div className="img-container">
        <img src={img ? obj.onHoverImg : obj.img} alt="container" />

        {img ? (
          <div className="learn-more">
            <a href="https://google.com">Learn More</a>
          </div>
        ) : null}
      </div>
      <div className="text">
        <p>{obj.smallTitle}</p>
        {/* <p>{obj.firstText}</p> */}
        <h3>{obj.title}</h3>
        <p>{obj.desc}</p>
      </div>
    </div>
  );
};

export default Content;
