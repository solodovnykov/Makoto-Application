import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-after"></div>
      <div className="footer-main">
        <div className="footer-main-logo">
          <div className="footer-text-h1">MAKOTO</div>
          <div className="footer-text-h2">КОМПЛЕКС УЮТНЫХ СЕРВЕРОВ</div>
        </div>
        <div className="footer-main-copyright">
          Copyright 2021 Makoto All rights reserved.
        </div>
      </div>
      <div className="footer-networks">
        <div className="footer-discord-icon"></div>
        <div className="footer-vk-icon"></div>
      </div>
    </div>
  );
}
