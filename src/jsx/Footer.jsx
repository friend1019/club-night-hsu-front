import React from "react";
import "../css/Footer.css"; // css 연결
import insta from "../img/instagram.png";
import 푸터로고 from "../img/푸터로고.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <img src={푸터로고} alt="footer-logo" className="footer-logo" />

        <div className="footer-members">
          <div>
            <div className="footer-role">디자인</div>
            <div>문지원</div>
            <div>주예원</div>
          </div>
          <div>
            <div className="footer-role">백엔드</div>
            <div>최지인</div>
          </div>
          <div>
            <div className="footer-role">프론트엔드</div>
            <div>최지인</div>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-role">FOLLOW US</div>
        <div className="footer-icons">
          <a href="https://www.instagram.com/likelion_hsu?igsh=NG5uNWQ1OHV4aWVr">
            <img src={insta} alt="insta" />
          </a>
          <a href="https://www.instagram.com/hsu_gmjd32th/">
            <img src={insta} alt="insta" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
