import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./sections/Contact/Contact";
import Projects from "./sections/Projects/Projects";
import Intro from "./sections/Intro/Intro";

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Intro} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </div>
  </Router>;

export default App;
