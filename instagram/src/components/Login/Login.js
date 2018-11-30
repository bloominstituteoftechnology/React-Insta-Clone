import React from 'react';
import './Login.css';
import Authenticate from '../Login/Login';

class Login extends React.Component{
  state ={
    username: '',
    password:''
  }

  handleUserInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  render(){
    return(
      <form className="login-form">
         <h3>Welcome to React Insta Clone</h3>
         <div>Please Login</div>
         <div>
           <input
             type="text"
             placeholder="User Name"
             name="username"
             value={this.state.username}
             onChange={this.handleUserInput}
           />
         </div>
         <div>
           <input
             type="password"
             placeholder="Password"
             name="password"
             value={this.state.password}
             onChange={this.handleUserInput}
           />
           <button onClick={this.props.login}>Click me to Log in</button>
         </div>
       </form>
    )
  }
}

export default Login;
