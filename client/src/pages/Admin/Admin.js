import React from "react";

import Container from "../../components/Container/Container";
import "./admin.scss";

import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AdminPostForm from "../AdminPostForm/AdminPostForm";
import { HashRouter, Route, Switch } from "react-router-dom";
import AdminManualForm from "../AdminManualForm/AdminManualForm";

export default function Admin() {
  return (
    <HashRouter>
      <div className="admin">
        <Container>
          <AdminNavbar />
          <Switch>
            <Route exact path="/" component={AdminPostForm} />
            <Route path="/manuals" component={AdminManualForm} />
          </Switch>
        </Container>
      </div>
    </HashRouter>
  );
}
