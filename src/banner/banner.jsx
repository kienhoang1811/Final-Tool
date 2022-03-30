import React from "react";
import "./banner.css";
import banner1 from "./img/banner1.jpg";
import banner2 from "./img/banner2.jpg";
import banner3 from "./img/banner3.jpg";
function Banner(props) {
  return (
    <div className="container-banner">
      <div id="banner">
        <div class="slide-wrapper">
          <div class="slide">
            <img className="banner1" src={banner1} />
          </div>
          <div class="slide">
            <img className="banner2" src={banner2} />
          </div>
          <div class="slide">
            <img className="banner3" src={banner3} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
