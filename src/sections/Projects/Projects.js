import React from "react";
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
import "./Projects.css";
import PHS from "../../static/img/phs.png";
import TBA from "../../static/img/tba.png";
import PWS from "../../static/img/pws.png";
import TSA from "../../static/img/tsa.png";
// Websites to look at for tech stack
// http://cihadturhan.com/
// http://robin-noguier.com/
// http://www.guillaumejuvenet.com/
const Projects = () => {
  return (
    <div>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Why Software Development?
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                In 2012 I was working for a healthcare company as a tech support
                specialist. I was in a room with developers, and day after day I
                watched these developers creating something out of nothing, so I
                started researching software development and started creating
                "Hello World" apps. After 6 months of tinkering my boss gave me
                a very ambicious project "Can you create a dashboard that we
                will display incoming data?" Over the next 6 months I dove
                deeper into C#, asp.net, and javascript to create a dashboard
                application that would display data in realtime. We purchased a
                TV and every morning when I walked in the office I was proud to
                see what I created hanging on the wall for everyone to see!
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image bordered size="large" src={PHS} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment
        style={{ padding: "8em 0em", textAlign: "center" }}
        vertical
        inverted
      >
        <div
          style={{ minHeight: 700, padding: "1em 0em", textAlign: "center" }}
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
                      being read to them, and this is the solution I came up
                      with. I use simple animations(using ng-animate) to hold
                      the childs attention while the verses are read to them.
                      With the click of a button the user can also be rerouted
                      to an adult version of the app that uses the Digital Bible
                      Platform API to pull back the King James version of the
                      bible. This project combines my knowledge of CSS, HTML,
                      Javascript, Angular 1, Materialize, Digital Bible Platform
                      API, and Firebase.
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
        </div>
      </Segment>
    </div>
  );
};

export default Projects;
