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
    <div className="projects">
      <h1>Front End Projects</h1>
      <Header>Front End Projects</Header>
      <div>JS, React, AngularJS, Bootstrap</div>
      <Grid columns={3} stackable divided>
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
      </Grid>
    </div>
  );
};

export default Projects;
