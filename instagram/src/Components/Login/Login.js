import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = e => {
        window.location.reload();
    };

    login = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);  
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
    return (
        <form>
           <input 
           onChange={this.login}
           value={this.state.username} 
           type='text' name='username' 
           placeholder='Username'></input>

           <input 
           onChange={this.login}
           value={this.state.password} 
           type='text' name='password'  
           placeholder='Password'></input>

           <button onClick={this.handleSubmit}>Login</button>
       </form>
        );
    };
}

export default Login;