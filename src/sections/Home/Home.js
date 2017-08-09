import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";
import Typist from "react-typist";
import scrollToComponent from "react-scroll-to-component";
import "./Home.css";

import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Intro from "../Intro/Intro";

const FixedMenu = () =>
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Menu position="right">
        <Menu.Item as="a" active>
          Home
        </Menu.Item>
        <Menu.Item
          as="a"
          onClick={() =>
            scrollToComponent(this.Violet, {
              offset: 0,
              align: "top",
              duration: 1500
            })}
        >
          Projects
        </Menu.Item>
        <Menu.Item as="a">Contact</Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>;

export default class HomepageLayout extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  render() {
    const { visible } = this.state;

    return (
      <div>
        {visible ? <FixedMenu /> : null}

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <div
            className="bgpm"
            style={{ minHeight: 700, padding: "1em 0em", textAlign: "center" }}
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item position="right">
                  <Menu.Item as="a" active>
                    Home
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() =>
                      scrollToComponent(this.Violet, {
                        offset: 0,
                        align: "top",
                        duration: 1500
                      })}
                  >
                    Projects
                  </Menu.Item>
                  <Menu.Item as="a">Contact</Menu.Item>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as="h1"
                content="JL Designs"
                inverted
                style={{
                  fontSize: "4em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: "1em"
                }}
              />
              <Typist>
                <span className="typist">
                  Making the Impossible...<br />Possible...
                </span>
              </Typist>
            </Container>
          </div>
        </Visibility>
        <Intro />
        {/* Why Software Development */}

        <Projects />
        {/* Front End Projects */}
        {/* Back End Projects */}

        <Contact />
        {/* Contact */}
        <section
          className="violet"
          ref={section => {
            this.Violet = section;
          }}
        >
          Violet
        </section>
        <Segment inverted vertical style={{ padding: "5em 0em" }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a">Banana Pre-Order</List.Item>
                    <List.Item as="a">DNA FAQ</List.Item>
                    <List.Item as="a">How To Access</List.Item>
                    <List.Item as="a">Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}
