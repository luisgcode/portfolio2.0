import React from "react";
import Hero from "../components/hero/Hero";
import Behind from "../components/behind/Behind";
import Projects from "../components/projects/Projects";
import Toolbox from "../components/toolbox/Toolbox";

const Home = () => {
  return (
    <div>
      <Hero />
      <Behind />
      <Projects />
      <Toolbox />
    </div>
  );
};

export default Home;
