import React from "react";
import { Grid, Image } from "semantic-ui-react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects page</h1>
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column>
            <Image src="/assets/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/assets/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/assets/images/wireframe/image.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Projects;
