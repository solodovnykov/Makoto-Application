import React from "react";
import "./footer.scss";

const Footer = () => {
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
        <a
          href="https://discord.com/invite/yzBCF4V"
          target="_blank"
          rel="noreferrer"
          className="footer-discord-icon"
        >
          {""}
        </a>
        <a
          href="https://vk.com/makotomc"
          target="_blank"
          rel="noreferrer"
          className="footer-vk-icon"
        >
          {""}
        </a>
      </div>
    </div>
  );
};
export default React.memo(Footer);
