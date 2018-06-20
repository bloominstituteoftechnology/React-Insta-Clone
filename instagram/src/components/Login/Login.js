import React, { Component } from 'react';

class Logins extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: ""
    }
  }

  // componentDidMount() {
  //   // will be called third
  //   if (window.localStorage.getItem({usernameInput})) {
  //     this.setState({
  //       users: JSON.parse(window.localStorage.getItem("comments"))
  //     }); // preferable for Async calls... AJAX
  //   } else {
  //     this.setState({ posts: dummyData }); // preferable for Async calls... AJAX
  //   }
  //   window.localStorage.setItem("comments", JSON.stringify(dummyData));
  // }

  changeUsername = event => this.setState({usernameInput: event.target.value});
  changePassword = event => this.setState({passwordInput: event.target.value});

  loginSubmit = (event, i) => {
    event.preventDefault();
    const username = this.state.usernameInput;
    const password = this.state.passwordInput;
    localStorage.setItem('user', username);
    localStorage.setItem('password', password);
    document.location.reload();
    // const comments = this.state.comments.slice();
    // comments.push({text: this.state.input, username: 'username'});
    // this.setState({comments, input: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.loginSubmit}>
          <input
            type="text"
            className="username"
            onChange={this.changeUsername}
            value={this.state.usernameInput}
          />
          <input
            type="text"
            className="password"
            onChange={this.changePassword}
            value={this.state.passwordInput}
          />
          <button onClick={this.loginSubmit}>Login</button>
        </form>
      </div>
    )
  }
}

export default Logins;