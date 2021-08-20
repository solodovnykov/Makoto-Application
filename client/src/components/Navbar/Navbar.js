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

      {/* <nav className="navbar-bottom">
        <ul className="navbar-bottom-list">
          <li className="navbar-bottom-item ">
            <NavLink
              to="/"
              exact
              activeClassName="navbar-bottom-item-active"
              className=""
            >
              <span class="nav-indicator"></span>
              <div className="navbar-bottom-icon home-icon" />
              <div className="navbar-bottom-text">О СЕРВЕРЕ</div>
            </NavLink>
          </li>
          <li className="navbar-bottom-item">
            <NavLink to="/ssdf" activeClassName="navbar-bottom-item-active">
              <span class="nav-indicator"></span>
              <div className="navbar-bottom-icon manual-icon" />
              <div className="navbar-bottom-text">РУКОВОДСТВА</div>
            </NavLink>
          </li>
          <div className="navbar-bottom-makoto-logo"></div>
          <li className="navbar-bottom-item">
            <NavLink to="/rules" activeClassName="navbar-bottom-item-active">
              <span class="nav-indicator"></span>
              <div className="navbar-bottom-icon rules-icon" />
              <div className="navbar-bottom-text">ПРАВИЛА</div>
            </NavLink>
          </li>
          <li className="navbar-bottom-item">
            <NavLink to="/eternum" activeClassName="navbar-bottom-item-active">
              <span class="nav-indicator"></span>
              <div className="navbar-bottom-icon eternum-icon" />
              <div className="navbar-bottom-text">ETERNUM</div>
            </NavLink>
          </li>
        </ul>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -9"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </nav> */}

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
                to="/manuals"
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
