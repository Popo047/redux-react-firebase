import React from "react";
import moment from "moment"; // for date viewing

function ProjectSummary({ project }) {
  return (
    <div className="card">
      <div className="card-content ">
        <span className="card-title">{project.title}</span>
        <p>
          Posted By {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="">24th May 2021</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
