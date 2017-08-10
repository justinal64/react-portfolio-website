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
              <Grid.Column>
                <img src={Angular} />
              </Grid.Column>
              <Grid.Column>
                <img src={Aspnet} />
              </Grid.Column>
              <Grid.Column>
                <img src={Bootstrap} />
              </Grid.Column>
              <Grid.Column>
                <img src={CSharp} />
              </Grid.Column>
              <Grid.Column>
                <img src={Css3} />
              </Grid.Column>
              <Grid.Column>
                <img src={Firebase} />
              </Grid.Column>
              <Grid.Column>
                <img src={Git} />
              </Grid.Column>
              <Grid.Column>
                <img src={GruntLogo} />
              </Grid.Column>
              <Grid.Column>
                <img src={Html5} />
              </Grid.Column>
              <Grid.Column>
                <img src={Javascript} />
              </Grid.Column>
              <Grid.Column>
                <img src={Jquery} />
              </Grid.Column>
              <Grid.Column>
                <img src={Npm} />
              </Grid.Column>
              <Grid.Column>
                <img src={Octocat} />
              </Grid.Column>
              <Grid.Column>
                <img src={ReactLogo} />
              </Grid.Column>
              <Grid.Column>
                <img src={Sass} />
              </Grid.Column>
              <Grid.Column>
                <img src={Sql} />
              </Grid.Column>
              <Grid.Column>
                <img src={VisualStudio} />
              </Grid.Column>
              <Grid.Column>
                <img src={Webpack} />
              </Grid.Column>
              <Grid.Column>
                <img src={Xtocat} />
              </Grid.Column>
            </Grid.Row>
            {/* Computer/Tablet section used unless user is on a mobile device*/}
            <Grid.Row columns={6} only="computer tablet">
              <Grid.Column>
                <img src={Angular} />
              </Grid.Column>
              <Grid.Column>
                <img src={Aspnet} />
              </Grid.Column>
              <Grid.Column>
                <img src={Bootstrap} />
              </Grid.Column>
              <Grid.Column>
                <img src={CSharp} />
              </Grid.Column>
              <Grid.Column>
                <img src={Css3} />
              </Grid.Column>
              <Grid.Column>
                <img src={Firebase} />
              </Grid.Column>
              <Grid.Column>
                <img src={Git} />
              </Grid.Column>
              <Grid.Column>
                <img src={GruntLogo} />
              </Grid.Column>
              <Grid.Column>
                <img src={Html5} />
              </Grid.Column>
              <Grid.Column>
                <img src={Javascript} />
              </Grid.Column>
              <Grid.Column>
                <img src={Jquery} />
              </Grid.Column>
              <Grid.Column>
                <img src={Npm} />
              </Grid.Column>
              <Grid.Column>
                <img src={Octocat} />
              </Grid.Column>
              <Grid.Column>
                <img src={ReactLogo} />
              </Grid.Column>
              <Grid.Column>
                <img src={Sass} />
              </Grid.Column>
              <Grid.Column>
                <img src={Sql} />
              </Grid.Column>
              <Grid.Column>
                <img src={VisualStudio} />
              </Grid.Column>
              <Grid.Column>
                <img src={Webpack} />
              </Grid.Column>
              <Grid.Column>
                <img src={Xtocat} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default TechStack;
