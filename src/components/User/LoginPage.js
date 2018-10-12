import React from 'react';
import { LoginMainContainer as MainContainer, FormHeading, FormText } from './styledMainContainer';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <MainContainer>
        <form action="submit">
          <FormHeading>Welcome</FormHeading>
          <FormText>Please Login</FormText>
          <label htmlFor="username"></label>
          <input
              id="username"
              type="text"
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
          />
          <label htmlFor="password"></label>
          <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
          />
          <button onClick={this.handleLoginSubmit}>Log In</button>
        </form>
      </MainContainer>
    );
  }
}

export default LoginPage;