import React from "react";
import PropTypes from "prop-types";
import "./cart.css";
Cart_shop.propTypes = {};

function Cart_shop(props) {
  return (
    <div className="container-cart">
      <div className="cart-detail">
      <table border="1">
        <tr>
            <th>Tên sản phẩm</th>
            <th>Màu</th>
            <th>Size</th>
            <th>Số lượng</th>
            <th>Giá</th>

        </tr>
        <tr>
            <td>Áo hoody summer</td>
            <td>Xanh</td>
            <td>XL</td>
            <td>1</td>
            <td>200.000 vnđ</td>
        </tr>
            
        <tr>
            <td>Áo hoody summer</td>
            <td>Xanh</td>
            <td>XL</td>
            <td>1</td>
            <td>200.000 vnđ</td>
        </tr>
        {/* <tr>
            <td>Áo hoody summer</td>
            <td>Xanh</td>
            <td>XL</td>
            <td>1</td>
            <td>200.000 vnđ</td>
        </tr> */}
    </table>

      </div>
      <div className="cart-button">
            <button className="cart-button-continue">Tiếp tục mua hàng</button>
            <button className="cart-button-pay">Thanh toán</button>
          </div>
    </div>
  );
}

export default Cart_shop;
