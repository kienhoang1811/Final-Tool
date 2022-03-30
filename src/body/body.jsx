import React from "react";
import PropTypes from "prop-types";
import "./body.css";
import "./fillter.css";
import "./products.css";
import bodo1 from "./img/bodo1.jpg";
import bodo2 from "./img/bodo2.jpg";
import bodo3 from "./img/bodo3.jpg";
import bodo4 from "./img/bodo4.jpg";
import bodo5 from "./img/bodo5.jpg";
import bodo6 from "./img/bodo6.jpg";
import bodo7 from "./img/bodo7.jpg";
import bodo8 from "./img/bodo8.jpg";
import bodo9 from "./img/bodo9.jpg";
import bodo10 from "./img/bodo10.jpg";
import bodo11 from "./img/bodo11.jpg";
import bodo12 from "./img/bodo12.jpg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faCartPlus, faGrimace } from "@fortawesome/free-solid-svg-icons";
Body.propTypes = {};

function Body(props) {
  return (

    <div className="container-body" id="container">
      <hr />
      <div className="body">
        <div className="fillter">
          <div className="danhmuc">
          <span className="gim-icon"><FontAwesomeIcon icon={faBullseye} /></span>
            <ul class="square">
            
              <br />
              <a href="#">New Arrivals</a>
              <br />
              <a href="#">Đồ Nam</a>
              <br />
              <a href="#">Đồ Nữ</a>
              <br />
              <a href="#">Đồ Đôi</a>
              <br />
              <a href="#">Áo Khoác</a>
              <br />
              <a href="#">Phụ Kiện</a>
              <br />
            </ul>
          </div>
        </div>
        <div className="products">
          <div className="thoitrangnam" >Thời trang nam</div>
          <div className="row">
            <div className="colum">
              <Link to="/product"><img className="bodo" src={bodo1} alt="" /></Link>

              <div className="product-name">
                <span>Mẫu đồ trẻ trung năng động</span>
              </div>
              
            </div>
            <div className="colum">
            <a href="/product-router-link"><img className="bodo" src={bodo2} alt="" /> </a>
              
              <div className="product-name">
                <span>Mẫu đồ trẻ trung năng động</span>
              </div>

            </div>
            <div className="colum" id="colum">
              <img className="bodo" src={bodo3} alt="" />
              <div className="product-name">
                <span>Mẫu đồ trẻ trung năng động</span>
              </div>
            </div>
            <div className="colum" id="colum">
              <img className="bodo" src={bodo4} alt="" />
              <div className="product-name">
                <span>Mẫu đồ trẻ trung năng động</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="thoitrangnu">Thời trang nữ</div>
          <div className="row">
            <div className="colum">
              <img className="bodo" src={bodo5} alt="" />
              <div className="product-name">
                <span>Mẫu đồ trẻ trung năng động</span>
              </div>
            </div>
            <div className="colum">
              <img className="bodo" src={bodo6} alt="" />
              <div className="product-name">
                <span>Mẫu đồ trẻ trung năng động</span>
              </div>
            </div>
            <div className="colum" id="colum">
              <img className="bodo" src={bodo7} alt="" />
              <div className="product-name">
                <span>Mẫu đồ trẻ trung năng động</span>
              </div>
            </div>
            <div className="colum" id="colum">
              <img className="bodo" src={bodo8} alt="" />
              <div className="product-name">
                <span>Mẫu đồ trẻ trung năng động</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="thoitrangcongso">Sản phẩm mới</div>
          <div className="row">
            <div className="colum">
              <img className="bodo" src={bodo9} alt="" />
              <div className="product-name">
                <span>Mẫu đồ trẻ trung năng động</span>
              </div>
            </div>
            <div className="colum">
              <img className="bodo" src={bodo10} alt="" />
              <div className="product-name">
                <span>Mẫu đồ trẻ trung năng động</span>
              </div>
            </div>
            <div className="colum" id="colum">
              <img className="bodo" src={bodo11} alt="" />
              <div className="product-name">
                <span>Mẫu đồ trẻ trung năng động</span>
              </div>
            </div>
            <div className="colum" id="colum">
              <img className="bodo" src={bodo12} alt="" />
              <div className="product-name">
                <span>Mẫu đồ trẻ trung năng động</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

  );
}

export default Body;
