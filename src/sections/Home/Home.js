import React, { Component } from "react";
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
import Typist from "react-typist";
import scrollToComponent from "react-scroll-to-component";
import "./Home.css";

import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Intro from "../Intro/Intro";
import TechStack from "../TechStack/TechStack";
export default class HomepageLayout extends Component {
  state = {};

  render() {
    return (
      <div>
        <div
          className="bgpm"
          style={{ minHeight: 700, padding: "1em 0em", textAlign: "center" }}
        >
          <Container>
            <Menu inverted fixed="top" pointing secondary size="large">
              <Menu.Item position="right">
                <Menu.Item
                  as="a"
                  onClick={() =>
                    scrollToComponent(this.HomeSection, {
                      offset: 0,
                      align: "top",
                      duration: 1500
                    })}
                >
                  Home
                </Menu.Item>
                <Menu.Item
                  as="a"
                  onClick={() =>
                    scrollToComponent(this.IntroSection, {
                      offset: 0,
                      align: "top",
                      duration: 1500
                    })}
                >
                  Intro
                </Menu.Item>
                <Menu.Item
                  as="a"
                  onClick={() =>
                    scrollToComponent(this.ProjectsSection, {
                      offset: 0,
                      align: "top",
                      duration: 1500
                    })}
                >
                  Projects
                </Menu.Item>
                <Menu.Item
                  as="a"
                  onClick={() =>
                    scrollToComponent(this.ContactSection, {
                      offset: 0,
                      align: "top",
                      duration: 1500
                    })}
                >
                  Contact
                </Menu.Item>
              </Menu.Item>
            </Menu>
          </Container>

          <wrapper
            ref={wrapper => {
              this.HomeSection = wrapper;
            }}
          >
            <Container text>
              <Header
                as="h1"
                content="JL Designs"
                inverted
                style={{
                  fontSize: "4em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: "1em"
                }}
              />
              <Typist>
                <span className="typist">
                  Making the Impossible...<br />Possible...
                </span>
              </Typist>
            </Container>
          </wrapper>
        </div>
        {/* Why Software Development */}
        <wrapper
          ref={wrapper => {
            this.IntroSection = wrapper;
          }}
        >
          <Intro />
        </wrapper>
        <wrapper
          ref={wrapper => {
            this.ProjectsSection = wrapper;
          }}
        >
          <Projects />
          <TechStack />
        </wrapper>
        {/* Front End Projects */}
        {/* Back End Projects */}
        <wrapper
          ref={wrapper => {
            this.ContactSection = wrapper;
          }}
        >
          {/* Contact */}
          <Contact />
        </wrapper>
      </div>
    );
  }
}
