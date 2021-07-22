import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function AdminRoute({ component: Component, ...rest }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.result.isAdmin ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/signIn" />
        )
      }
    ></Route>
  );
}
