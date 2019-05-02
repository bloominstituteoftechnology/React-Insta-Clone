import React, { Component } from 'react';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
      }

      databinder=(e)=>{this.setState({ [e.target.name]: e.target.value });}

      loginHandle =(e)=>{
        const user = this.state.username;
        window.localStorage.setItem('user', user);
        window.location.reload();
      };
      

    render() {
        return (
            <div>
                <form>
                    <input name="username" onChange={this.databinder} value={this.state.username} type="text" placeholder="Enter User Name" ></input>
                    <input name ="password" onChange={this.databinder} value={this.state.password} type="password" placeholder="password" ></input>
                    <button onClick={this.loginHandle}>Log In</button > 
                </form>
            </div>
        );
    }
}

export default Login;


