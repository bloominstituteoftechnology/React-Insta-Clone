import React, { Component } from 'react';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
      }

      loginHandle =(e)=>{
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
      };
      databinder=(e)=>{this.setState({ [e.target.name]: e.target.value });}

    render() {
        return (
            <div>
                <form>
                    <input onChange= {this.dataBinder} type="text" placeholder="Enter User Name"></input>
                    <input onChange={this.dataBinder} type="password" placeholder="password"></input>
                    <button onClick={this.loginHandle}>Log In</button > 
                </form>
            </div>
        );
    }
}

export default Login;