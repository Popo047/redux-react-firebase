import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="">
          <h5 className="text-darken">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />{" "}
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn green">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
