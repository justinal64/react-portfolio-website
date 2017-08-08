import React from "react";
import { Button, Icon, Segment, Header, Grid } from "semantic-ui-react";
import "./Contact.css";

const Contact = () => {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical inverted>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header inverted as="h3" style={{ fontSize: "2em" }}>
              Like what you see? Let's talk
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              In 2012 I was working for a healthcare company as a tech support
              specialist. I was in a room with developers, and day after day I
              watched these developers creating something out of nothing, so I
              started researching software development and started creating
              "Hello World" apps. After 6 months of tinkering my boss gave me a
              very ambicious project "Can you create a dashboard that we will
              display incoming data?" Over the next 6 months I dove deeper into
              C#, asp.net, and javascript to create a dashboard application that
              would display data in realtime. We purchased a TV and every
              morning when I walked in the office I was proud to see what I
              created hanging on the wall for everyone to see!
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            {/* <Image bordered size="large" src={PHS} /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Contact;
