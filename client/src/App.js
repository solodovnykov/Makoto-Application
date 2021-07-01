import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Customer from "./pages/Customer/Customer";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Customer} />
      <Route path="/admin" component={Admin} />
    </Switch>
  );
};

export default App;
