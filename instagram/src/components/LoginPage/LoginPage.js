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
        <form className="login__form" action="submit">
          <h2>Sign In</h2>
          <input
            className="login__user"
            type="username"
            value={this.state.userText}
            placeholder="username"
            onChange={this.typingUser}
            required
          />
          <input
            className="login__pass"
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
