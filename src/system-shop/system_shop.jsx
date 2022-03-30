import React from 'react';
import PropTypes from 'prop-types';
import "./system-shop.css";
System_shop.propTypes = {
    
};

function System_shop(props) {
    return (
        <div className="container-system-shop">
            <div className="shop">
                <a href="shop-main">Cơ sở chính: 140 Phạm Văn Chiêu - P9 - Gò Vấp</a> <br />
                <span> Số điện thoại : 0763 656 338</span><br />
                <a href="#">Email: kshopcs1@gmail.com</a><br />
                <span> Quản lí: Hoàng Trọng Kiên</span><br />
                <a href="#">Giờ mở cửa: 7h - 21h30p hàng ngày</a>
            </div>
            <div className="shop">
                <a href="shop-main">Cơ sở 2: 380 Nguyễn Văn Khối - P8 - Gò Vấp</a><br />
                <span> Số điện thoại : 0909 524 386</span><br />
                <a href="#">Email: kshopcs1@gmail.com</a><br />
                <span> Quản lí: Trần Gia Hân</span><br />
                <a href="#">Giờ mở cửa: 7h - 21h30p hàng ngày</a>
            </div>
            <div className="shop">
                <a href="shop-main">Cơ sở 3: 252 Nguyễn Văn Lượng - P16 - Gò Vấp</a><br />
                <span> Số điện thoại : 0947 833 639</span><br />
                <a href="#">Email: kshopcs1@gmail.com</a><br />
                <span> Quản lí: Trần Gia Bảo</span><br />
                <a href="#">Giờ mở cửa: 7h - 21h30p hàng ngày</a>
            </div>
            <div className="shop">
                <a href="shop-main">Cơ sở 4: 400 Nguyễn Kiệm - P3 - Gò Vấp</a><br />
                <span> Số điện thoại : 0977 888 399</span><br />
                <a href="#">Email: kshopcs1@gmail.com</a><br />
                <span> Quản lí: Ngô Minh Khỏe</span><br />
                <a href="#">Giờ mở cửa: 7h - 21h30p hàng ngày</a>
            </div>
        </div>
    );
}

export default System_shop;