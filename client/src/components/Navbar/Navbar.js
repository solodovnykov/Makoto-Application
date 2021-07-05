import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
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
        <div className="logo"></div>
        <button className="navbar-main-button-mob">ХОЧУ ИГРАТЬ!</button>
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

        <button className="navbar-main-button">ХОЧУ ИГРАТЬ!</button>

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
              to="/vote"
              activeClassName="navbar-link-active"
              className="navbar-link"
            >
              ГОЛОСОВАНИЕ
            </NavLink>
          </li>
        </ul>

        <div className="navbar-networks-menu">
          <div href="#" className="navbar-icons discord-icon"></div>
          <div href="#" className="navbar-icons vk-icon"></div>
        </div>
      </div>

      <div className="navbar-networks">
        <div href="#" className="navbar-icons discord-icon"></div>
        <div href="#" className="navbar-icons vk-icon"></div>
      </div>
    </div>
  );
}
