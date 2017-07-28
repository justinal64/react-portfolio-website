import React from "react";
import {
  Grid,
  Image,
  Segment,
  Card,
  Reveal,
  Header,
  Icon,
  Button
} from "semantic-ui-react";
import "./Projects.css";
import TheBibleApp from "../../static/img/projects/TheBibleApp_Homescreen.png";
// Websites to look at for tech stack
// http://cihadturhan.com/
// http://robin-noguier.com/
// http://www.guillaumejuvenet.com/
const Projects = () => {
  return (
    <div>
      <div className="projects">
        <div className="opener" />
      </div>
      <Header>Front End Projects</Header>
      <div>JS, React, AngularJS, Bootstrap</div>
      {/* <Grid columns={3} stackable>
        <Grid.Row>
          <Grid.Column>
            <Icon name="home" size="massive" />
            <Header>TheBibleApp</Header>
            <Segment raised>
              I struggled to get my children to listen to the bible being read
              to them(4 children under the age of 3), and this is the solution I
              came up with. I use simple animations(using ng-animate) to hold
              the childs attention while the verses are read to them. With the
              click of a button the user can also be rerouted to an adult
              version of the app that uses the Digital Bible Platform API to
              pull back the King James version of the bible. This project
              combines my knowledge of CSS, HTML, Javascript, Angular 1,
              Materialize, Digital Bible Platform API, and Firebase.
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Icon name="home" size="massive" />
            <Header>TheBibleApp</Header>
            <Segment raised>
              Pellentesque habitant morbi tristique senectus. Pellentesque
              habitant morbi tristique senectus. Pellentesque habitant morbi
              tristique senectus. Pellentesque habitant morbi tristique
              senectus. Pellentesque habitant morbi tristique senectus.
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Icon name="home" size="massive" />
            <Header>TheBibleApp</Header>
            <Segment raised>
              Pellentesque habitant morbi tristique senectus.
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Header>Back End Projects</Header>
        <Grid.Row>
          <Grid.Column>
            <Icon name="home" size="massive" />
            <Header>TheBibleApp</Header>
            <Segment raised>
              Pellentesque habitant morbi tristique senectus.
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Icon name="home" size="massive" />
            <Header>TheBibleApp</Header>
            <Segment raised>
              Pellentesque habitant morbi tristique senectus. Pellentesque
              habitant morbi tristique senectus. Pellentesque habitant morbi
              tristique senectus. Pellentesque habitant morbi tristique
              senectus. Pellentesque habitant morbi tristique senectus.
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Icon name="home" size="massive" />
            <Header>TheBibleApp</Header>
            <Segment raised>
              Pellentesque habitant morbi tristique senectus.
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
    </div>
  );
};

export default Projects;
