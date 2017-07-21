import React from "react";
import { Header } from "semantic-ui-react";
import Typist from "react-typist";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Typist>
        <Header as="h1" textAlign="center">
          Welcome To My Portfolio Website
        </Header>
      </Typist>
      {/* <Header as="h2" textAlign="center" className="headerR">
        To My
      </Header>
      <Header as="h1" textAlign="center" className="headerR">
        Portfolio Website
      </Header> */}
    </div>
  );
};

export default Home;
