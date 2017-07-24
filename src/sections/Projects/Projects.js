import React from "react";
import { Grid, Image } from "semantic-ui-react";
import "./Projects.css";

// Websites to look at for tech stack
// http://cihadturhan.com/
// http://robin-noguier.com/
// http://www.guillaumejuvenet.com/
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
