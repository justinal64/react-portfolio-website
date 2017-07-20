import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Contact from "./sections/Contact/Contact";
import Projects from "./sections/Projects/Projects";
import Intro from "./sections/Intro/Intro";
import NotFound from "./sections/NotFound/NotFound";
// import "./css/style.css";

render(
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("app")
);
