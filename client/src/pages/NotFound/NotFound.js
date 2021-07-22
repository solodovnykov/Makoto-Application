import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./notFound.scss";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="not-found">
      <div className="not-found-wrapper">
        <div className="error-code">404</div>
        <div className="not-found-line" />
        <div className="not-found-msg-wrapper">
          <div className="not-found-msg">Упс, что-то пошло не так</div>
          <Link to="/" className="not-found-btn">
            Вернуться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
