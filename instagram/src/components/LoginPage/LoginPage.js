import React from "react";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userText: "",
      passText: ""
    };
  }
  typingUser = e => {
    this.setState({
      userText: e.target.value
    });
  };
  typingPass = e => {
    this.setState({
      passText: e.target.value
    });
  };
  render() {
    return (
      <div className="login">
        <form action="submit">
          <input
            type="username"
            value={this.state.userText}
            placeholder="username"
            onChange={this.typingUser}
            required
          />
          <input
            type="password"
            value={this.state.passText}
            placeholder="password"
            onChange={this.typingPass}
            required
          />
          <button
            className="login__btn"
            onSubmit={e =>
              this.props.signIn(e, this.state.userText, this.state.passText)
            }
            onClick={e =>
              this.props.signIn(e, this.state.userText, this.state.passText)
            }
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
