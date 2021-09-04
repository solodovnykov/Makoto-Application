import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Container from "../../components/Container/Container";
import "./signIn.scss";

import { signIn } from "../../actions/auth";

const initialState = {
  firstName: "",
  login: "",
  password: "",
  confirmPassword: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  // const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signIn(formData, history));
  };

  // const switchMode = (e) => {
  //   e.preventDefault();
  //   setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  //   handleShowPassword(false);
  // };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

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

          <button type="sumbit" className="sign-in-btn"></button>
        </form>
      </Container>
    </div>
  );
};

export default SignIn;
