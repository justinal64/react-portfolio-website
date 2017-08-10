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
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
            </Grid.Row>
            {/* Computer/Tablet section used unless user is on a mobile device*/}
            <Grid.Row columns={4} only="computer tablet">
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
              <Grid.Column>
                <Icon name="home" size="massive" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default TechStack;
