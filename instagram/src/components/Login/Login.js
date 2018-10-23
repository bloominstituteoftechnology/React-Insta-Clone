import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value }); //Computed Property: reusable handler, allows for different values to be updated, (ES6 shortcut)
  };

  submitHandler = event => {
    const user = this.state.username; //grab username from state
    localStorage.setItem("user", user); //create item in local storage called user, set equal to username
    window.location.reload(); //force location reload, refresh page, 
  };

  render() {
    return (
      <form>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={this.state.username}
          onChange={this.inputHandler}
        />
        <input
          name="password"
          type="text"
          placeholder="password"
          value={this.state.password}
          onChange={this.inputHandler}
        />
        <button onClick={this.submitHandler}>Login</button>
      </form>
    );
  }
}

export default Login;
