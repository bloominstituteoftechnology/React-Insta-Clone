import React from "React";
class Logins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: ""
    }
  }
  render() {
    return (
      <h1>Login Page</h1>
      <form>
        <input type="text" name="username">
        <input type="">
        <button>Login</button>
      </form>
      )
    }
  }

export default Logins;
