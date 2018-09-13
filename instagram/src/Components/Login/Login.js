import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLoginSubmit = e => {
    //     const user = this.state.username;
    //     localStorage.setItem('user', user);
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
           type="text"  
           placeholder='Password'></input>

           <button onClick={this.handleLoginSubmit}>Login</button>
       </form>
        );
    };
}

export default Login;