import React from "react";
import { Grid, Image, Segment, Card, Reveal, Header } from "semantic-ui-react";
import "./Projects.css";

// Websites to look at for tech stack
// http://cihadturhan.com/
// http://robin-noguier.com/
// http://www.guillaumejuvenet.com/
const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects page</h1>
      <Grid stackable centered columns={3}>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Image src="https://www.budsies.com/blog/wp-content/uploads/2016/09/TechTransfer.jpg" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://www.budsies.com/blog/wp-content/uploads/2016/09/TechTransfer.jpg" />
          </Grid.Column>
          <Grid.Column>
            <Image src="https://www.budsies.com/blog/wp-content/uploads/2016/09/TechTransfer.jpg" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Reveal animated="move">
              <Reveal.Content visible>
                <Image src="https://www.budsies.com/blog/wp-content/uploads/2016/09/TechTransfer.jpg" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image src="http://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_52793/Image/Directory/Class%20Pages/Technology/tech.jpg" />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column>
            <Reveal animated="move">
              <Reveal.Content visible>
                <Image src="https://www.budsies.com/blog/wp-content/uploads/2016/09/TechTransfer.jpg" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image src="http://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_52793/Image/Directory/Class%20Pages/Technology/tech.jpg" />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column>
            <Reveal animated="move">
              <Reveal.Content visible>
                <Image src="https://www.budsies.com/blog/wp-content/uploads/2016/09/TechTransfer.jpg" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image src="http://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_52793/Image/Directory/Class%20Pages/Technology/tech.jpg" />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Projects;

// <List divided relaxed>
//   <List.Item>
//     <List.Icon name='github' size='large' verticalAlign='middle' />
//     <List.Content>
//       <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
//       <List.Description as='a'>Updated 10 mins ago</List.Description>
//     </List.Content>
//   </List.Item>
//   <List.Item>
//     <List.Icon name='github' size='large' verticalAlign='middle' />
//     <List.Content>
//       <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
//       <List.Description as='a'>Updated 22 mins ago</List.Description>
//     </List.Content>
//   </List.Item>
//   <List.Item>
//     <List.Icon name='github' size='large' verticalAlign='middle' />
//     <List.Content>
//       <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
//       <List.Description as='a'>Updated 34 mins ago</List.Description>
//     </List.Content>
//   </List.Item>
// </List>
