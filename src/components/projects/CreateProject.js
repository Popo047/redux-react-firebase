import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/Actions/projectActions";
import Modal from "../modal/Modal";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); //prevents page from refresh
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push("/dash"); //new thing suggested by stranger [Helped] prop in react-router-dom
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="text-darken">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />{" "}
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              className="materialize-textarea"
              type="textarea"
              id="content"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn green btn modal-trigger ">Create</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
