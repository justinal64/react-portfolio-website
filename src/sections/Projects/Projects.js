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
      <Header>Tech Stack</Header>
      <div>JS, React, AngularJS, Bootstrap</div>
      <Grid stackable centered columns={3}>
        <Grid.Row columns={3}>
          <Grid.Column>
            <div className="overlay">
              <Header>TheBibleApp</Header>
              <Image src={TheBibleApp} alt="TheBibleApp" className="image" />
              <div className="middle">
                <div className="text">John Doe</div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="overlay">
              <Header>TheBibleApp</Header>
              <Image
                src="https://www.budsies.com/blog/wp-content/uploads/2016/09/TechTransfer.jpg"
                alt="Avatar"
                className="image"
              />
              <div className="middle">
                <div className="text">
                  This project was created using Angular 1x, Bootstrap, HTML,
                  and CSS3. This project was created using Angular 1x,
                  Bootstrap, HTML, and CSS3. This project was created using
                  Angular 1x, Bootstrap, HTML, and CSS3.
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="overlay">
              <Header>TheBibleApp</Header>
              <Image
                src="https://www.budsies.com/blog/wp-content/uploads/2016/09/TechTransfer.jpg"
                alt="Avatar"
                className="image"
              />
              <div className="middle">
                <div className="text">Joanne Doe</div>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
        <h1>Back End Projects</h1>
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
        <h1>Fun Projects</h1>
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
