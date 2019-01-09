import React, {Component} from 'react';
import 'Login.css';

class Login extends React{
    constructor(props) {
        super(props);
        this.state = {
            // email: '',
            // password: ''
        }
    }

    render (){
        return (
            <div>
            <div>Login to Instagram!</div>
                <form onSubmit={}>
                <input 
                    placeholder="UserName"
                    type="text"
                    onKeyUp={}
                 />
                <input 
                    placeholder="Password"
                    type="text"
                    onKeyUp={}
                />
            <button type="submit">Log In</button>
          </form>
            </div>
        )
    }
}

export default Login;