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
import "./Contact.css";

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
          <Grid container stackable centered verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={12}>
                <p style={{ fontSize: "1.33em" }}>
                  Thank you for visiting my website. I am always looking to
                  expand my skill set. If you feel like I might be a good fit
                  for your organization please feel free to reach out to me
                  using the links below. Thank you for taking the time to stop
                  by and I look forward to hearing from you.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="footer-social-icons">
            <h4 className="_14" />
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.fb.me/justin.leggett.12"
                  className="social-icon"
                >
                  {" "}<i className="fa fa-facebook fa-5x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/justinleggett/"
                  className="social-icon"
                >
                  {" "}<i className="fa fa-linkedin fa-5x" />
                </a>
              </li>
              <li>
                <a href="mailto:justinal8183@gmail.com" className="social-icon">
                  {" "}<i className="fa fa-envelope fa-5x" />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Segment>
    </div>
  );
};

export default Contact;
