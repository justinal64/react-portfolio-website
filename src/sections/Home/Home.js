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
import "./Home.css";

import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
const FixedMenu = () =>
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Menu position="right">
        <Menu.Item as="a" active>
          Home
        </Menu.Item>
        <Menu.Item as="a">Projects</Menu.Item>
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
                  <Menu.Item as="a">Projects</Menu.Item>
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
        {/* Why Software Development */}
        <Projects />
        {/* Back End Projects */}
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container>
            <Divider
              as="h2"
              className="header"
              horizontal
              style={{ margin: "3em 0em", textTransform: "uppercase" }}
            >
              Back End Projects
            </Divider>

            <Segment style={{ padding: "0em" }} vertical>
              <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      TheSocialApp Restful Api
                    </Header>
                    <p style={{ fontSize: "1.33em" }} className="height">
                      This is the Restful api for TheSocialApp, the react native
                      app I created for my final capstone. For the backend
                      project I decided to use ASP.NET Core, and MongoDb neither
                      of these were taught at NSS, but NSS taught me how to
                      learn, so I applied these skills to learn these
                      technologies. The backend allows the user to Post, Get,
                      Put, and Delete data from the MongoDb, as well as only
                      allowing the user to pull data that it attached to a
                      unique ID that is assigned to each user when their account
                      was created.
                    </p>
                    <Button.Group size="huge">
                      <Button
                        as="a"
                        icon="github"
                        content="Source Code"
                        primary
                        href="https://github.com/justinal64/thesocialappv3"
                        size="huge"
                      />
                    </Button.Group>
                  </Grid.Column>
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      Bangazon-Inc
                    </Header>
                    <p style={{ fontSize: "1.33em" }} className="height">
                      Bangazon-Inc is an application that was created in an
                      agile team environment. This project was divided up
                      between myself and four other teammates and we used C#,
                      ADO.NET, MVC, dapper, with a SQL backend. This application
                      is an amazon clone, consisting of a section to create a
                      new user, add items to your cart, checkout, and purchase
                      an item.
                    </p>
                    <Button.Group size="huge">
                      <Button
                        as="a"
                        icon="github"
                        content="Source Code"
                        primary
                        href="https://github.com/Team-Slytherin/Bangazon-Terminal-Interface"
                        size="huge"
                      />
                    </Button.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Container>
        </Segment>
        {/* Contact */}
        <Contact />

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
