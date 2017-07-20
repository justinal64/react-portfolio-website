import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Contact from "../../sections/Contact/Contact";
import Projects from "../../sections/Projects/Projects";
import Intro from "../../sections/Intro/Intro";
import NotFound from "../../sections/NotFound/NotFound";
import "./navigation.css";
export default class Navigation extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    // go to route here.....
    e.preventDefault();

    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;
    return (
      <Menu fluid widths={7} size="massive" secondary>
        <Menu.Item name="Intro" active={activeItem === "Intro"}>
          <Link to="/">Intro</Link>
        </Menu.Item>
        <Menu.Item name="Contact" active={activeItem === "Contact"}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item name="Projects" active={activeItem === "Projects"}>
          <Link to="/projects">Projects</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
