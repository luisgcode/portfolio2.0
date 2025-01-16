import React from "react";
import TableList from "../ProjectsPage/table/TableList";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("global");
  return (
    <div>
      <TableList />
    </div>
  );
};

export default Projects;
