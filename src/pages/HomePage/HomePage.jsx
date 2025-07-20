import React from "react";
import Hero from "../HomePage/hero/Hero";
import Behind from "../HomePage/behind/Behind";
import Projects from "../HomePage/projects/Projects";
import Toolbox from "../HomePage/toolbox/Toolbox";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");
  return (
    <div>
      <Hero />
      <Projects />
      <Toolbox />
    </div>
  );
};

export default Home;
