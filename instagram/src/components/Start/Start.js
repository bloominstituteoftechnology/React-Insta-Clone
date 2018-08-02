import React from "react";
import "./LogIn.css";
import Login from "./Login";
import SignUp from './SignUp';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      signUpTriggered: false
    };
  }

  componentDidMount() {
    let users = JSON.parse(localStorage.getItem('users'))
    if (users) {
    this.setState({ users })
    }
  }

  handleSwitchScreens = e => {
    e.preventDefault();
    this.setState(prevState => ({ signUpTriggered: !prevState.signUpTriggered }))
  }

  handleNewProfile = (phone, name, username, password) => {
    let user = {
      id: phone,
      name: name,
      username: username,
      password: password,
      likedPosts: []
    }
    let users = this.state.users.concat(user)
    this.setState({ users })
    localStorage.setItem('users', JSON.stringify(users))
    this.props.handleLogIn(username)
  }

  handleLoginSubmit = (username, password) => {
    if (this.state.users) {
    this.state.users.forEach(user => {
      if (user.username === username && user.password === password) {
        this.props.handleLogIn(username)
      }
    }) }
  }

  render() {
    return (
    <div className="wrapper"> 
      {this.state.signUpTriggered 
        ? <SignUp 
          handleSwitchScreens={this.handleSwitchScreens}
          handleNewProfile={this.handleNewProfile}
        />
        : <Login 
          handleLoginSubmit={this.handleLoginSubmit}
          handleSwitchScreens={this.handleSwitchScreens}
        />
      }
    </div>
    )
  }
}
export default Start;
