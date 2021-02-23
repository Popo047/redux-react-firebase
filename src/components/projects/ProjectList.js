import React from "react";
import ProjectSummary from "./ProjectSummary";

function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project) => {
          return <ProjectSummary project={project} key={project.id} />;
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
