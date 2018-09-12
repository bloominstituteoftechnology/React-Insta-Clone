import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    login = e => {
        localStorage.setItem(Username, 'Emily')
    }

    return (
       <form onSubmit={this.login} >
           <input type='text' placeholder='Username'></input>
           <input type='text' placeholder='Password'></input>
           <button>Login</button>
       </form>
    );
};

export default Login;