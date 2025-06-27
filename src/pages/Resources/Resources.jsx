import React from "react";
import "./resources.css";
import { useTranslation } from "react-i18next";
import { collectiveBanner } from "../../components/media";

const Resources = () => {
  const { t } = useTranslation("global");
  return (
    <div className="collective">
      <div
        className="banner-collective bg-cover bg-center h-[400px]"
        style={{ backgroundImage: `url(${collectiveBanner})` }}
      ></div>
      {/* Under construction here */}
      <div className="underConstruction">
        f
        <span className="block text-5xl text-center mt-32">
          Section under construction.
        </span>
        <span className="text-xl block text-center mt-6 p-10">
          In this upcoming section of my portfolio, I’ll be sharing resources
          I’ve either created or discovered through hands on experience —
          resources that AI alone can’t offer, because context and real world
          application make all the difference.
        </span>
        <span className="text-xl block text-center mt-6">Coming soon...</span>
      </div>
    </div>
  );
};

export default Resources;
