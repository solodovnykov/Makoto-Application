import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Customer from "./pages/Customer/Customer";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Customer} />
        <AdminRoute path="/admin" component={Admin}></AdminRoute>
        <Route path="/signIn" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
