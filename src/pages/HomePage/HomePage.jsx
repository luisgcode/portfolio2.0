import React from "react";
import Hero from "../HomePage/hero/Hero";
import Projects from "../HomePage/projects/Projects";
import Toolbox from "../HomePage/toolbox/Toolbox";
import { useTranslation } from "react-i18next";
import { usePageMeta } from "../../hooks/usePageMeta";

const Home = () => {
  const { t } = useTranslation("global");
  usePageMeta(t("meta.homeTitle"), t("meta.homeDescription"));

  return (
    <main>
      <Hero />
      <Projects />
      <Toolbox />
    </main>
  );
};

export default Home;
