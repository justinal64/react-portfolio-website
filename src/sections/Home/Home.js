import React from "react";
import { Header } from "semantic-ui-react";
import Typist from "react-typist";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Typist>
        <span className="h1">
          Hi my name is Justin and I like to make cool websites...<br />
        </span>
        <span className="h1">
          If you would like to see more of my work please click the projects
          tab...
        </span>
      </Typist>
    </div>
  );
};

export default Home;
