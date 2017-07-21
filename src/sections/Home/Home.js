import React from "react";
import { Header } from "semantic-ui-react";
import Typist from "react-typist";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Typist>
        <span className="h1">
          Welcome To My <br />Portfolio Website
        </span>
      </Typist>
    </div>
  );
};

export default Home;
