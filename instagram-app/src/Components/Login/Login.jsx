import React, { Component } from 'react';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
      }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Enter User Name"></input>
                    <input type="password" placeholder="password"></input>
                    <button></button>
                </form>
            </div>
        );
    }
}

export default Login;