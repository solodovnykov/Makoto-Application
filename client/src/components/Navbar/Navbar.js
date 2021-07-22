import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    const menu = document.getElementById("menu");
    const burger = document.getElementById("burger-menu");
    if (mobileMenu === true) {
      menu.style.left = 0;
      burger.classList.add("burger-active");
    } else {
      menu.style.left = "-300px";
      burger.classList.remove("burger-active");
    }
  }, [mobileMenu]);

  const changeBackground = () => {
    if (window.scrollY >= 67) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="navbar">
      <div
        className={navbarActive ? "navbar-wrapper active" : "navbar-wrapper"}
      >
        <Link to="/">
          <div className="logo"></div>
        </Link>

        <Link to="/startPlay" className="navbar-main-button-mob">
          ХОЧУ ИГРАТЬ!
        </Link>
        <div
          onClick={() => setMobileMenu(!mobileMenu)}
          id="burger-menu"
          className="navbar-burger"
        >
          <span className="navbar-burger-item"></span>
        </div>
      </div>

      <div id="menu" className="navbar-main">
        <div className="navbar-menu-logo">MAKOTO</div>
        <div className="navbar-list-wrapper">
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink
                to="/"
                exact
                activeClassName="navbar-link-active"
                className="navbar-link"
              >
                О СЕРВЕРЕ
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/signIn"
                activeClassName="navbar-link-active"
                className="navbar-link"
              >
                РУКОВОДСТВА
              </NavLink>
            </li>
          </ul>

          <Link to="/startPlay" className="navbar-main-button">
            ХОЧУ ИГРАТЬ!
          </Link>

          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink
                to="/rules"
                activeClassName="navbar-link-active"
                className="navbar-link"
              >
                ПРАВИЛА
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/eternum"
                activeClassName="navbar-link-active"
                className="navbar-link"
              >
                ETERNUM
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-networks-menu">
          <a
            href="https://discord.com/invite/yzBCF4V"
            target="_blank"
            rel="noreferrer"
            className="navbar-icons discord-icon"
          >
            {""}
          </a>
          <a
            href="https://vk.com/makotomc"
            target="_blank"
            rel="noreferrer"
            className="navbar-icons vk-icon"
          >
            {""}
          </a>
        </div>
      </div>

      <div className="navbar-networks">
        <a
          href="https://discord.com/invite/yzBCF4V"
          target="_blank"
          rel="noreferrer"
          className="navbar-icons discord-icon"
        >
          {""}
        </a>
        <a
          href="https://vk.com/makotomc"
          target="_blank"
          rel="noreferrer"
          className="navbar-icons vk-icon"
        >
          {""}
        </a>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
