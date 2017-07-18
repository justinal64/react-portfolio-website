import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class Navigation extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary fluid widths={6}>
          <Menu.Item
            name="Intro"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Projects"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Contact"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          {/* <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu> */}
        </Menu>

        {/* <Segment>
          <img src={require("../static/img/test.png")} />
        </Segment> */}
      </div>
    );
  }
}
