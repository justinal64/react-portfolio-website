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
import NASA from "../../static/img/projects/nasa_hp.png";

// Websites to look at for tech stack
// http://cihadturhan.com/
// http://robin-noguier.com/
// http://www.guillaumejuvenet.com/
const Projects = () => {
  return (
    <div>
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
                      href="https://github.com/justinal64/thesocialappfinal"
                      centered
                      size="large"
                      className="imageStyling"
                      src={TSA}
                    />

                    <p style={{ fontSize: "1.33em" }} className="padding">
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
                      Relaxation using Redux
                    </Header>
                    <Image
                      href="http://justinleggett.me/projects/nasa/"
                      centered
                      size="large"
                      className="imageStyling"
                      src={NASA}
                    />

                    <p style={{ fontSize: "1.33em" }} className="padding">
                      Since I was young I have always been fasinated with space.
                      When I'm looking at an image of space I feel like I am
                      sitting in an art gallary looking at a nice piece of art.
                      I decided to make a website that would display images of
                      space and that would update every few minutes. I used
                      ReactJS, Redux and the NASA API to create this website.
                      The image updates every 2 minutes and if you would like to
                      learn more about the image scroll down for additional
                      information.
                    </p>
                    <Button.Group size="huge">
                      <Button
                        as="a"
                        icon="home"
                        content="Visit Website"
                        positive
                        href="http://justinleggett.me/projects/nasa/"
                        size="huge"
                      />
                      <Button.Or />
                      <Button
                        as="a"
                        icon="github"
                        content="Source Code"
                        primary
                        href="https://github.com/justinal64/nasa-react-redux"
                        size="huge"
                      />
                    </Button.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Container>
        </div>
      </Segment>
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
                    app I created for my final capstone. For the backend project
                    I decided to use ASP.NET Core, and MongoDb neither of these
                    were taught at NSS, but NSS taught me how to learn, so I
                    applied these skills to learn these technologies. The
                    backend allows the user to Post, Get, Put, and Delete data
                    from the MongoDb, as well as only allowing the user to pull
                    data that it attached to a unique ID that is assigned to
                    each user when their account was created.
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
                    Bangazon-Inc is an application that was created in an agile
                    team environment. This project was divided up between myself
                    and four other teammates and we used C#, ADO.NET, MVC,
                    dapper, with a SQL backend. This application is an amazon
                    clone, consisting of a section to create a new user, add
                    items to your cart, checkout, and purchase an item.
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
    </div>
  );
};

export default Projects;
