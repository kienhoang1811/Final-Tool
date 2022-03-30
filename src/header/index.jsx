import React, { useEffect, useState } from "react";
import { icons } from "react-icons";
import PropTypes from "prop-types";
import "./index.css";
import "./header.css";
import "./menu.css";
import "./tool.css";
import "./menu-mobie.css";
import "./search.css";
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

import kien from "./img/anh2.jpg";
import logo from "./img/logo2.jpg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Form } from "reactstrap";

Header.propTypes = {};

function Header(props) {
  // const [a,setA]= useState("abc") 
  // const alo=()=>{
  //   setA("kien123")
  // }
  // useEffect(()=>{
  //   console.log("abc")
  // },[])
  return (
    <div class="container" id="container_home">
      <div class="header">
        <div class="style-center">
          <div class="menu">
            <div class="logo">
              <img className="iconlogo" src={logo} alt="" />
            </div>
            <Link to="/home" >
              {/* onClick ={alo} */}
              <div class="home-page">
                Trang chủ 
                {/* {a} */}
              </div>
            </Link>
            <Link to="/product-list">
              
                <div class="product">Sản phẩm</div>
              
            </Link>
            <a href="#container-event">
              <div class="events">Sự kiện</div>
            </a>

            <Link to="system-shop">
              <div class="shop-system">
                Hệ thống cửa hàng
              </div>
            </Link>
          </div>
          <div class="tool">
            <div class="search">
              <label htmlFor="nav-search-input" class="search">
                <FontAwesomeIcon icon={faSearch} />
              </label>
              <input
                hidden
                type="checkbox"
                className="nav-input"
                id="nav-search-input"
              />
              <label htmlFor="nav-search-input" className="nav-overlay"></label>
              <div className="nav-search">
                <input className="text-search" type="text" />
                <button className="button-search">Tìm kiếm</button>
              </div>
            </div>
            <Link to="/cart">
              <div class="cart">
                <span>
                  <FontAwesomeIcon icon={faCartPlus} />
                </span>
              </div>
            </Link>
            <div class="create">
              <button class="b-create">Đăng nhập</button>
            </div>
            <div class="user">
              <img className="user-avata" src={kien} alt="" />
              <span class="triangle-icon">&#9661;</span>
            </div>
          </div>
          <label htmlFor="nav-mobie-input" className="navbar">
            <FontAwesomeIcon icon={faBars} />
          </label>
          <input
            hidden
            type="checkbox"
            className="nav-input"
            id="nav-mobie-input"
          />
          <label htmlFor="nav-mobie-input" className="nav-overlay"></label>
          <div class="menu-mobie">
            <label htmlFor="nav-mobie-input" className="bar-Times">
              <FontAwesomeIcon icon={faTimes} />
            </label>
            <div class="logo-mobie">
              <img className="iconlogo" src={logo} alt="" />
            </div>
            <hr />
            <Link to="/home">
              <div class="home-page-mobie">Trang chủ</div>
            </Link>

            <Link to="product-list">
              <div class="product-mobie">Sản phẩm</div>
            </Link>
            <div class="events-mobie">Sự kiện</div>
            <Link to="system-shop">
              <div class="shop-system-mobie">Hệ thống cửa hàng</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
