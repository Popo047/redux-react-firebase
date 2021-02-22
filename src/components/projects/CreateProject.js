import React, { Component } from "react";

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
    console.log(this.state);
  };

  render() {
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
          <button className="btn green ">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateProject;
