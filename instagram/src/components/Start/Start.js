import React from "react";
import "./LogIn.css";
import Login from "./Login";
import SignUp from './SignUp';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      signUpTriggered: false
    };
  }

  handleChange = e => {
    console.log(e.target.type)
    if (e.target.type === 'text') {
      this.setState({ username: e.target.value });
    } if (e.target.type === 'password') {
      this.setState({ password: e.target.value})
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.username);
    this.props.handleLogIn(this.state.username);
  };

  handleSwitchScreens = e => {
    e.preventDefault();
    this.setState(prevState => ({ signUpTriggered: !prevState.signUpTriggered }))
  }

  render() {
    return (
    <div className="wrapper"> 
      {this.state.signUpTriggered 
        ? <SignUp 
          handleSwitchScreens={this.handleSwitchScreens}
        />
        : <Login 
          handleSubmit={this.handleSubmit}
          username={this.state.username}
          onChange={this.onChange}
          password={this.state.password}
          handleSwitchScreens={this.handleSwitchScreens}
        />
      }
    </div>
    )
  }
}
export default Start;
