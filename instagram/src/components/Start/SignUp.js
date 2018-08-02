import React from "react";
import logo from "../../assets/instagramlogin.png";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      fullName: '',
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleNewProfile(this.state.phoneNumber, this.state.fullName, this.state.username, this.state.password)
  }


  render() {
    let fieldsValid = this.state.password && this.state.username && this.state.phoneNumber && this.state.fullName;
    return (
      <div className="content">
        <div className="box signUpPage">
          <form className="signUp-page--box" onSubmit={this.handleSubmit}>
            <img src={logo} alt="logo" className="start--logo" />
            <p className="signUp-header">
              Sign up to see photos and videos from your friends.
            </p>
            <div className="input-box">
              <input
                name="phoneNumber"
                type="tel"
                className="input input--phone"
                placeholder="Phone Number"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
              <input
                name="fullName"
                type="text"
                className="input input--fullname"
                placeholder="Full Name"
                value={this.state.fullName}
                onChange={this.handleChange}
              />
              <input
              name="username"
                type="text"
                className="input input--username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <input
                name="password"
                type="password"
                className="input input--password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button disabled={!fieldsValid} className="btn" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <div className="box box__signUp secondary">
          <div className="secondary-box">
            <p> Have an account? </p>
            <button onClick={this.props.handleSwitchScreens}>Log In</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
