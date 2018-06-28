import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <div>
                <h1>Sign In:</h1>
                <form>
                    <input
                        type='text'
                        placeholder='Username'
                    />
                    <input
                        type='password'
                        placeholder='Password'
                    />
                    <button
                        onClick=''
                    >Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Login;