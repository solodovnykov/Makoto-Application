import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../pages/Home/Home";
import Footer from "../../components/Footer/Footer";
import "./customer.scss";
import Rules from "../Rules/Rules";

const Customer = () => {
  return (
    <HashRouter>
      <div className="customer">
        <Container>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rules" component={Rules} />
          </Switch>
          <Footer />
        </Container>
      </div>
    </HashRouter>
  );
};

export default Customer;
