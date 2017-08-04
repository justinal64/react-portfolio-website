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
import PHS from "../../static/img/phs.png";
import TBA from "../../static/img/tba.png";
import PWS from "../../static/img/pws.png";
import TSA from "../../static/img/tsa.png";
import Test from "../../static/img/marvel-logo-test.png";
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
            className="bg"
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
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Why Software Development?
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  In 2012 I was working for a healthcare company as a tech
                  support specialist. I was in a room with developers, and day
                  after day I watched these developers creating something out of
                  nothing, so I started researching software development and
                  started creating "Hello World" apps. After 6 months of
                  tinkering my boss gave me a very ambicious project "Can you
                  create a dashboard that we will display incoming data?" Over
                  the next 6 months I dove deeper into C#, asp.net, and
                  javascript to create a dashboard application that would
                  display data in realtime. We purchased a TV and every morning
                  when I walked in the office I was proud to see what I created
                  hanging on the wall for everyone to see!
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image bordered size="large" src={PHS} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        {/* Front End Projects*/}
        <Segment
          inverted
          style={{ padding: "8em 0em", textAlign: "center" }}
          vertical
        >
          <Container>
            <Divider
              as="h2"
              className="header"
              horizontal
              inverted
              style={{ margin: "3em 0em", textTransform: "uppercase" }}
            >
              Front End Projects
            </Divider>

            <Segment inverted style={{ padding: "0em" }} vertical>
              <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header inverted as="h3" style={{ fontSize: "2em" }}>
                      TheBibleApp
                    </Header>
                    <Image
                      href="http://justinleggett.me/projects/thebibleapp/index.html#/"
                      centered
                      size="large"
                      className="imageStyling"
                      src={TBA}
                    />
                    <p style={{ fontSize: "1.33em" }} className="height">
                      I struggled to get my children to listen to the bible
                      being read to them(4 children under the age of 3), and
                      this is the solution I came up with. I use simple
                      animations(using ng-animate) to hold the childs attention
                      while the verses are read to them. With the click of a
                      button the user can also be rerouted to an adult version
                      of the app that uses the Digital Bible Platform API to
                      pull back the King James version of the bible. This
                      project combines my knowledge of CSS, HTML, Javascript,
                      Angular 1, Materialize, Digital Bible Platform API, and
                      Firebase.
                    </p>
                    <Button.Group size="huge">
                      <Button
                        as="a"
                        icon="home"
                        content="Visit Website"
                        positive
                        href="http://justinleggett.me/projects/thebibleapp/index.html#/"
                        size="huge"
                      />
                      <Button.Or />
                      <Button
                        as="a"
                        icon="github"
                        content="Source Code"
                        primary
                        href="https://github.com/justinal64/TheBibleApp"
                        size="huge"
                      />
                    </Button.Group>
                  </Grid.Column>
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header inverted as="h3" style={{ fontSize: "2em" }}>
                      Portfolio Website
                    </Header>
                    <Image
                      href="http://justinleggett.me"
                      centered
                      size="large"
                      className="imageStyling"
                      src={PWS}
                    />
                    <p style={{ fontSize: "1.33em" }} className="height">
                      I started learning ReactJS about 6 months ago and I
                      absolutely love the ideas, so I recreated my portfolio
                      website using ReactJS and Semantic Ui for styling.
                    </p>
                    <Button.Group size="huge">
                      <Button
                        as="a"
                        icon="home"
                        content="Visit Website"
                        positive
                        href="http://justinleggett.me"
                        size="huge"
                      />
                      <Button.Or />
                      <Button
                        as="a"
                        icon="github"
                        content="Source Code"
                        primary
                        href="https://github.com/justinal64/react-portfolio-website"
                        size="huge"
                      />
                    </Button.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Segment inverted style={{ padding: "0em" }} vertical>
              <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header inverted as="h3" style={{ fontSize: "2em" }}>
                      TheSocialApp
                    </Header>
                    <Image
                      href="http://justinleggett.me/projects/thebibleapp/index.html#/"
                      centered
                      size="large"
                      className="imageStyling"
                      src={TSA}
                    />

                    <p style={{ fontSize: "1.33em" }}>
                      TheSocialApp is an IOS/Android application written in
                      React Native with a ASP.NET core RESTful API connected to
                      a MongoDB for storing and retrieving data. ReactJS and
                      React Native wasn’t something that I was taught at NSS,
                      instead I wanted to push myself to learn something new for
                      my final project. This application is essentially a clone
                      of Facebook. It was a central area where you can view
                      posts from users in your social network. It has a tab for
                      adding friends and a tab for editing your profile.
                    </p>
                    <Button
                      as="a"
                      icon="github"
                      content="Source Code"
                      primary
                      href="https://github.com/justinal64/thesocialappfinal"
                      size="huge"
                    />
                    <Divider
                      as="h2"
                      className="header"
                      horizontal
                      inverted
                      style={{
                        margin: "3em 0em",
                        textTransform: "uppercase"
                      }}
                    >
                      Coming Soon to Android and IOS
                    </Divider>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Container>
        </Segment>
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
        {/* Open Source Projects */}

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
