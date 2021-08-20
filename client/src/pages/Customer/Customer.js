import React, { Suspense, lazy } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Container from "../../components/Container/Container";
import Home from "../../pages/Home/Home";
import "./customer.scss";
import Rules from "../Rules/Rules";
import PostScreen from "../PostScreen/PostScreen";
import PostListScreen from "../PostListScreen/PostListScreen";
import NotFound from "../NotFound/NotFound";
import StartPlay from "../StartPlay/StartPlay";
import Eternum from "../Eternum/Eternum";
import Manuals from "../Manuals/Manuals";
import ManualScreen from "../ManualScreen/ManualScreen";

const Navbar = lazy(() => import("../../components/Navbar/Navbar"));
const Footer = lazy(() => import("../../components/Footer/Footer"));

const Customer = () => {
  return (
    <HashRouter>
      <div className="customer">
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/posts/:id" component={PostScreen} />
            <Route exact path="/posts/" component={PostListScreen} />
            <Route exact path="/startPlay" component={StartPlay} />
            <Route exact path="/eternum" component={Eternum} />
            <Route exact path="/manuals" component={Manuals} />
            <Route exact path="/manuals/:id" component={ManualScreen} />
            <Route component={NotFound} />
          </Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </Container>
      </div>
    </HashRouter>
  );
};

export default Customer;
