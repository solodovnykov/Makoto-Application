import React from "react";
import { useDispatch } from "react-redux";
import * as actionType from "../../constants/actionTypes";
import { NavLink, useHistory } from "react-router-dom";
import "./adminNavbar.scss";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/signIn");
  };

  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div className="admin-navbar">
      <div className="admin-bar">
        <div className="line-wrapper">
          <button
            aria-label="logout"
            className="admin-bar-nickname"
            onClick={logout}
          >
            {user && user.result.login ? <>{user.result.login}</> : ""}
          </button>
          <div className="line" />
        </div>

        <div className="vk-icon" />
        <div className="line-center">
          <div className="line-top" />
          <div className="line-bottom" />
        </div>
        <div className="discord-icon" />
        <div className="line" />
      </div>

      <nav className="admin-navbar-list">
        <NavLink
          to="/"
          exact
          className="admin-link"
          activeClassName="admin-link-active"
        >
          Посты
        </NavLink>
        <NavLink
          to="/manuals"
          className="admin-link"
          activeClassName="admin-link-active"
        >
          Руководства
        </NavLink>
      </nav>

      <div className="admin-stats">
        <div className="admin-stat-list">
          <div className="admin-stat">
            <div className="admin-stat-title">Посещаемость сайта</div>
            <div className="admin-stat-items">
              <div className="admin-stat-item">
                <div className="admin-stat-number">48</div>
                <div className="admin-stat-info">за день</div>
              </div>
              <div className="admin-stat-item">
                <div className="admin-stat-number">500</div>
                <div className="admin-stat-info">за неделю</div>
              </div>
              <div className="admin-stat-item">
                <div className="admin-stat-number">8450</div>
                <div className="admin-stat-info">за месяц</div>
              </div>
            </div>
          </div>

          <div className="admin-stat">
            <div className="admin-stat-title">Посещаемость сайта</div>
            <div className="admin-stat-items">
              <div className="admin-stat-item">
                <div className="admin-stat-number">48</div>
                <div className="admin-stat-info">за день</div>
              </div>
              <div className="admin-stat-item">
                <div className="admin-stat-number">500</div>
                <div className="admin-stat-info">за неделю</div>
              </div>
              <div className="admin-stat-item">
                <div className="admin-stat-number">8450</div>
                <div className="admin-stat-info">за месяц</div>
              </div>
            </div>
          </div>
        </div>

        <NavLink to="/" className="hub-button"></NavLink>
        <span className="admin-hub-line" />

        <div className="admin-stat-list">
          <div className="admin-stat">
            <div className="admin-stat-title reverse">Посещаемость сайта</div>
            <div className="admin-stat-items">
              <div className="admin-stat-item">
                <div className="admin-stat-number">48</div>
                <div className="admin-stat-info">за день</div>
              </div>
              <div className="admin-stat-item">
                <div className="admin-stat-number">500</div>
                <div className="admin-stat-info">за неделю</div>
              </div>
              <div className="admin-stat-item">
                <div className="admin-stat-number">8450</div>
                <div className="admin-stat-info">за месяц</div>
              </div>
            </div>
          </div>

          <div className="admin-stat">
            <div className="admin-stat-title reverse">Посещаемость сайта</div>
            <div className="admin-stat-items">
              <div className="admin-stat-item">
                <div className="admin-stat-number">48</div>
                <div className="admin-stat-info">за день</div>
              </div>
              <div className="admin-stat-item">
                <div className="admin-stat-number">500</div>
                <div className="admin-stat-info">за неделю</div>
              </div>
              <div className="admin-stat-item">
                <div className="admin-stat-number">8450</div>
                <div className="admin-stat-info">за месяц</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
