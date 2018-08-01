import React, { Component } from 'react';
import './Login.css'


class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: ''
      }
    }
    // handle input chnages  //handles the commment input 
//   commentInputHandler = event => {
//     this.setState({ comment: event.target.value });
//   };

    inputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }
    // handle submit
    submitHandler = () => {
        const theUsersName = this.state.username;
        localStorage.setItem('userKey', theUsersName);
        window.location.reload();
    }

    render() {
        return (
            <div className="login-container">
            <form>
                <input 
                type="text"
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.inputHandler}
                />
                <input 
                type="password"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.inputHandler}
                />
                <button onClick={this.submitHandler}>submit</button>
            </form>
            </div>
        )
    }
}

export default Login;