import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Customer from "./pages/Customer/Customer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path="/" component={Customer} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
