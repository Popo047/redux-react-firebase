import React from "react";

function ProjectSummary({ project }) {
  return (
    <div className="card">
      <div className="card-content ">
        <span className="card-title">{project.title}</span>
        <p>Posted By Popo</p>
        <p className="">21st Feb 2021</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
