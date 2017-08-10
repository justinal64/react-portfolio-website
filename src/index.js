import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./base.css";
import "semantic-ui-css/semantic.min.css";
import Home from "./sections/Home/Home";
import NotFound from "./sections/NotFound/NotFound";

render(
  <Router>
    <div>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("app")
);
