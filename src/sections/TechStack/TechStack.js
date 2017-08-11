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
import "./TechStack.css";
import BootStrap from "../../static/img/tech_icons/bootstrap.png";
import Angular from "../../static/img/tech_icons/angular.png";
import Aspnet from "../../static/img/tech_icons/Aspnet.png";
import Bootstrap from "../../static/img/tech_icons/bootstrap.png";
import CSharp from "../../static/img/tech_icons/c.png";
import Css3 from "../../static/img/tech_icons/css3.png";
import Firebase from "../../static/img/tech_icons/firebase.png";
import Git from "../../static/img/tech_icons/git.png";
import GruntLogo from "../../static/img/tech_icons/grunt-logo.png";
import Html5 from "../../static/img/tech_icons/html5.png";
import Javascript from "../../static/img/tech_icons/javascript.png";
import Jquery from "../../static/img/tech_icons/jquery.png";
import Materialize from "../../static/img/tech_icons/materialize.png";
import Npm from "../../static/img/tech_icons/npm.png";
import Octocat from "../../static/img/tech_icons/octocat.png";
import ReactLogo from "../../static/img/tech_icons/react.png";
import Sass from "../../static/img/tech_icons/sass.png";
import VisualStudio from "../../static/img/tech_icons/visualstudio.png";
import Webpack from "../../static/img/tech_icons/webpack.png";
import Xtocat from "../../static/img/tech_icons/xtocat.png";
import Sql from "../../static/img/tech_icons/sql.png";

const TechStack = () => {
  return (
    <div>
      <Segment
        style={{ padding: "8em 0em", textAlign: "center" }}
        vertical
        inverted
      >
        <Container>
          <Divider
            as="h2"
            className="header"
            horizontal
            inverted
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            Technology Stack
          </Divider>

          <Grid>
            {/* Shows up on Mobile view only */}
            <Grid.Row columns={3} only="mobile">
              <Grid.Column className="overlayEffect">
                <img src={Angular} />
                <p className="title">Angular</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Aspnet} />
                <p className="title">.Net</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Bootstrap} />
                <p className="title">Bootstrap</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={CSharp} />
                <p className="title">C#</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Css3} />
                <p className="title">CSS3</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Firebase} />
                <p className="title">Firebase</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Git} />
                <p className="title">Git</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={GruntLogo} />
                <p className="title">Grunt</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Html5} />
                <p className="title">Html5</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Javascript} />
                <p className="title">Javascript</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Jquery} />
                <p className="title">JQuery</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Npm} />
                <p className="title">Npm</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Octocat} />
                <p className="title">Github</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={ReactLogo} />
                <p className="title">React</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Sass} />
                <p className="title">Sass</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Sql} />
                <p className="title">Sql</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={VisualStudio} />
                <p className="title">Visual Studio</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Webpack} />
                <p className="title">Webpack</p>
                <div className="overlay" />
              </Grid.Column>
            </Grid.Row>
            {/* Computer/Tablet section used unless user is on a mobile device*/}
            <Grid.Row columns={6} only="computer tablet">
              <Grid.Column className="overlayEffect">
                <img src={Angular} />
                <p className="title">Angular</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Aspnet} />
                <p className="title">.Net</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Bootstrap} />
                <p className="title">Bootstrap</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={CSharp} />
                <p className="title">C#</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Css3} />
                <p className="title">CSS3</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Firebase} />
                <p className="title">Firebase</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Git} />
                <p className="title">Git</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={GruntLogo} />
                <p className="title">Grunt</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Html5} />
                <p className="title">Html5</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Javascript} />
                <p className="title">Javascript</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Jquery} />
                <p className="title">JQuery</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Npm} />
                <p className="title">Npm</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Octocat} />
                <p className="title">Github</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={ReactLogo} />
                <p className="title">React</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Sass} />
                <p className="title">Sass</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Sql} />
                <p className="title">Sql</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={VisualStudio} />
                <p className="title">Visual Studio</p>
                <div className="overlay" />
              </Grid.Column>
              <Grid.Column className="overlayEffect">
                <img src={Webpack} />
                <p className="title">Webpack</p>
                <div className="overlay" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default TechStack;
