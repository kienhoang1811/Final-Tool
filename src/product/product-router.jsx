import React from "react";
import { icons } from "react-icons";
import PropTypes from "prop-types";
import "./product-router.css";
import "./product-related.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartPlus,
  faCoffee,
  faSearch,
  faSearchDollar,
  faSearchPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import sanpham2 from "./img/sanpham2.jpg";
import sanpham3 from "./img/sanpham3.jpg";
import sanpham4 from "./img/sanpham4.jpg";
import sanpham5 from "./img/sanpham5.jpg";
import productdetail from "./img/product-detail.jpg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Form } from "reactstrap";

Product.propTypes = {};

function Product(props) {
  return (
    <div className="container-page-product">
      {/* product router dom */}
      <div className="product-router">
        <div className="product-img">
          <img className="product-image" src={sanpham2} alt="" />
        </div>

        <div className="product-info">
          <div className="product-router-name">
            <h3>ÁO HOODIE U1AKH2031001</h3>
          </div>

          <div className="product-price">
            <span>200.000 vnđ</span>
          </div>
          <span>Màu sắc:</span>
          <div className="product-type">
            <div className="product-colum-type">
              <img className="product-image-type" src={sanpham3} alt="" />
            </div>

            <div className="product-colum-type">
              <img className="product-image-type" src={sanpham4} alt="" />
            </div>

            <div className="product-colum-type">
              <img className="product-image-type" src={sanpham5} alt="" />
            </div>
          </div>
          <span>Kích cỡ:</span>
          <div className="product-size">
            <div className="product-colum-size">S</div>

            <div className="product-colum-size">M</div>

            <div className="product-colum-size">L</div>

            <div className="product-colum-size">XL</div>

            <div className="product-colum-size">XXL</div>
           
        
            
            
          </div>
          <span>Số lượng:</span>
          <div className="product-number"><input type="number" name="quantity" min="1" max="100"/></div>

          <div className="product-button-cart">
            <button className="product-add-cart">Thêm vào giỏ hàng</button>
            <button className="product-buy-now">Mua ngay</button>
          </div>

          <div className="product-policy">
            <a href="#">|| Bảo hành sản phẩm trong 90 ngày</a> <br />
            <a href="#">|| Đổi trả hàng trong vòng 30 ngày</a> <br />
            <a href="#">|| Hotline bán hàng 0947 833 639</a>
          </div>
        </div>
        <div className="product-detail">
          {/* <img className="product-detail-img" src={productdetail} alt="" /> */}
          <table border="1">
        <tr>
            <th>Thông số</th>
            <th>Size M</th>
            <th>Size L</th>
            <th>Size XL</th>
            <th>Size XXL</th>

        </tr>
        <tr>
            <td>Dài áo:</td>
            <td>65</td>
            <td>71</td>
            <td>73</td>
            <td>75</td>
        </tr>
            
        <tr>
            <td>Dài tay:</td>
            <td>65</td>
            <td>71</td>
            <td>73</td>
            <td>75</td>
        </tr>
        <tr>
            <td>Ngang vai:</td>
            <td>65</td>
            <td>71</td>
            <td>73</td>
            <td>75</td>
        </tr>
        
    </table>
        </div>
      </div>
      <div className="product-related-label">Sản phẩm liên quan</div>

      <div className="product-realated-list">
        <div className="product-colum">
          <Link to="/product">
            <img className="product-bodo" src={sanpham2} alt="" />
          </Link>

          <div className="product-name">
            <span>Mẫu đồ trẻ trung năng động</span>
          </div>
        </div>
        <div className="product-colum">
          <a href="/product">
            <img className="product-bodo" src={sanpham3} alt="" />{" "}
          </a>

          <div className="product-name">
            <span>Mẫu đồ trẻ trung năng động</span>
          </div>
        </div>
        <div className="product-colum">
          <img className="product-bodo" src={sanpham4} alt="" />
          <div className="product-name">
            <span>Mẫu đồ trẻ trung năng động</span>
          </div>
        </div>
        <div className="product-colum">
          <img className="product-bodo" src={sanpham2} alt="" />
          <div className="product-name">
            <span>Mẫu đồ trẻ trung năng động</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
