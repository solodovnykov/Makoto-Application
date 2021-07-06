import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Customer from "./pages/Customer/Customer";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Customer} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
