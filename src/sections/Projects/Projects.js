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
      <Header>Front End Tech Stack</Header>
      <div>JS, React, AngularJS, Bootstrap</div>
      <Card.Group stackable itemsPerRow={3}>
        <Card>
          <div className="image">
            <Image src={TheBibleApp} />
          </div>
          <Card.Content>
            <Card.Header>TheBibleApp</Card.Header>
            <Card.Meta>Created December 2016</Card.Meta>
            <Card.Description>
              TheBibleApp is a web based Bible reading website. Written in
              Angular 1.x, using Material Design for styling , and Firebase for
              storing data.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://thumbs.dreamstime.com/z/technology-hands-38213409.jpg" />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://thumbs.dreamstime.com/z/technology-hands-38213409.jpg" />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://thumbs.dreamstime.com/z/technology-hands-38213409.jpg" />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://thumbs.dreamstime.com/z/technology-hands-38213409.jpg" />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://thumbs.dreamstime.com/z/technology-hands-38213409.jpg" />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://thumbs.dreamstime.com/z/technology-hands-38213409.jpg" />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://thumbs.dreamstime.com/z/technology-hands-38213409.jpg" />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://thumbs.dreamstime.com/z/technology-hands-38213409.jpg" />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://thumbs.dreamstime.com/z/technology-hands-38213409.jpg" />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://thumbs.dreamstime.com/z/technology-hands-38213409.jpg" />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image src="https://thumbs.dreamstime.com/z/technology-hands-38213409.jpg" />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
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
