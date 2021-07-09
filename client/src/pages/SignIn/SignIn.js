import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Container from "../../components/Container/Container";
import "./signIn.scss";

import { signIn, signUp } from "../../actions/auth";

const initialState = {
  firstName: "",
  login: "",
  password: "",
  confirmPassword: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.userSignin);
  const { userInfo } = user;

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
    if (userInfo && userInfo.result.isAdmin) {
      history.push("/admin");
    } else {
      history.push("/");
    }
  };

  const switchMode = (e) => {
    e.preventDefault();
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    handleShowPassword(false);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="sign-in-page">
      <Container>
        <div className="admin-bar">
          <div className="line" />
          <div className="vk-icon" />
          <div className="line-center">
            <div className="line-top" />
            <div className="line-bottom" />
          </div>
          <div className="discord-icon" />
          <div className="line" />
        </div>
        <div className="hub-btn-wrapper">
          <NavLink to="/" className="hub-button"></NavLink>
        </div>

        <form className="sign-in-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              onChange={handleChange}
              name="firstName"
              className="sign-in-input"
              placeholder="Имя"
              type="text"
              autoFocus
            />
          )}
          <input
            onChange={handleChange}
            name="login"
            className="sign-in-input"
            placeholder="Ник"
            type="text"
          />
          <div className="sign-in-input-wrapper">
            <input
              onChange={handleChange}
              className="sign-in-input"
              placeholder="Пароль"
              name="password"
              type={showPassword ? "text" : "password"}
            />
            <button
              className="eye-wrapper"
              type="button"
              onClick={handleShowPassword}
            >
              {showPassword ? (
                <div className="eye-off" />
              ) : (
                <div className="eye-open" />
              )}
            </button>
          </div>

          {isSignUp && (
            <input
              className="sign-in-input"
              placeholder="Подтвердите пароль"
              name="confirmPassword"
              type="password"
              onChange={handleChange}
            />
          )}
          <button className="switch-btn" type="button" onClick={switchMode}>
            {isSignUp ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Регистрация"}
          </button>
          <button type="sumbit" className="sign-in-btn"></button>
        </form>
      </Container>
    </div>
  );
};

export default SignIn;
