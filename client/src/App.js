import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import NotFound from "./pages/NotFound/NotFound";
import LoaderImg from "./images/Loader.gif";

const Customer = lazy(() => import("./pages/Customer/Customer"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));

const App = () => {
  
  return (
    <Suspense
      fallback={
        <div className="loader">
          <img src={LoaderImg} alt="" className="loader-img" />
        </div>
      }
    >
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" render={() => <Customer />} />
          <AdminRoute path="/admin" component={Admin} />
          <Route path="/signIn" render={() => <SignIn />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
