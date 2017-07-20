import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Contact from "../sections/Contact/Contact";
import Projects from "../sections/Projects/Projects";
import Intro from "../sections/Intro/Intro";
import NotFound from "../sections/NotFound/NotFound";

export default class Navigation extends Component {
  render() {
    return (
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
      </div>
    );
  }
}
