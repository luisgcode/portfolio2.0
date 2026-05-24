import React from "react";
import TableList from "../ProjectsPage/table/TableList";
import { useTranslation } from "react-i18next";
import { usePageMeta } from "../../hooks/usePageMeta";

const Projects = () => {
  const { t } = useTranslation("global");
  usePageMeta(t("meta.projectsTitle"), t("meta.projectsDescription"));

  return (
    <main>
      <TableList />
    </main>
  );
};

export default Projects;
