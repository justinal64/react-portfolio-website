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

const Contact = () => {
  return (
    <div>
      <Segment style={{ padding: "8em 0em", textAlign: "center" }} vertical>
        <Container>
          <Divider
            as="h2"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            Contact
          </Divider>
        </Container>
      </Segment>
    </div>
  );
};

export default Contact;
