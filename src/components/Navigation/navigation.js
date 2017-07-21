import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <Menu fluid size="massive" secondary className="nav">
        <Menu.Menu position="left">
          <Menu.Item name="Home">
            <Link to="/">JL Designs</Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Item name="Home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item name="Projects">
          <Link to="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item name="Contact">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
