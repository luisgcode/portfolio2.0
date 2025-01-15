import React from "react";
import Hero from "../HomePage/hero/Hero";
import Behind from "../HomePage/behind/Behind";
import Projects from "../HomePage/projects/Projects";
import Toolbox from "../HomePage/toolbox/Toolbox";
import About from "../HomePage/about/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <Behind />
      <Projects />
      <Toolbox />
      <About />
    </div>
  );
};

export default Home;
