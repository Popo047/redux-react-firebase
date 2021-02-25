import React from "react";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project) => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              {" "}
              {/* Key associated with parent element   */}
              <ProjectSummary project={project} />{" "}
            </Link>
          );
        })}
      {/* <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary /> */}
    </div>
  );
}

export default ProjectList;
