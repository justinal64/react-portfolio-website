import React from "react";
import { Header } from "semantic-ui-react";
import Typist from "react-typist";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Typist>
        <span className="h1">
          Hi my name is Justin Leggett and I am a full stack software developer
          from Nashville Tennessee. I recently graduated from Nashville Software
          School and now I am looking for my first full time gig in software
          development. When I'm not creating super cool websites like this, you
          will find me hanging out with my wife and playing with our children.
          Thank you so much for visiting and have a great day.
        </span>
      </Typist>
    </div>
  );
};

export default Home;
