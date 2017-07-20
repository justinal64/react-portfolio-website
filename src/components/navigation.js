import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Intro</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Intro} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}
