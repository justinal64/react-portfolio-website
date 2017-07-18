import React from "react";
import "./base.css"; // eslint-disable-line import/no-unassigned-import
import "semantic-ui-css/semantic.min.css";
import Intro from "./sections/Intro/Intro";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Navigation from "./components/navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <Intro />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
