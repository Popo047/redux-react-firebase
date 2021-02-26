import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

function ProjectDetails(props) {
  // const id = props.match.params.id; //verified via inspect in GC
  // console.log(props);// to view the available params

  const { project, auth } = props;

  if (project) {
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container section project-details">
        <div className="card ">
          <div className="card-content">
            <span className="card-title">
              {project.title} - {project.id}
            </span>
            <p>{project.content}</p>
          </div>
          <div className="card-action">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>22 Feb</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        {/* to check if project exists,  */}
        <p> Loading Project</p>
      </div>
    );
  }
}

const mapStateToProps = (state, myProps) => {
  console.log(state); // to find the exact obj
  const id = myProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null; //to check if there are any projects in collection
  return {
    auth: state.firebase.auth,
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
