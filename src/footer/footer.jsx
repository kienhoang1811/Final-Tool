import React from 'react';
import PropTypes from 'prop-types';
import "./footer.css";
Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div className="container-footer">
            <div className="footer">
                <div className="contact-info">
                    <h2>Thông tin liên hệ</h2>
                    <br />
                    <p>Số điện thoại: 0763 656 338 hoặc 0947 833 639</p>
                    <p>Email: kshop247@gmail.com</p>
                    <p>Cơ sở chính: 140 Phạm Văn Chiêu - phường 9 - Gò Vấp</p>
                </div>
                <div className="policy">
                    <h2>Chính sách của cửa hàng</h2>

                </div>
                <div className="social-link">

                    <h2>Liên kết mạng xã hội</h2>
                </div>
            </div>            
        </div>
    );
}

export default Footer;