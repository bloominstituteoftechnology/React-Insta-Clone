import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            usernameInput: '',
            passwordInput: ''
        }
    }

    componentDidMount(){
    }

    userHandler = e => {
        console.log(e);
        this.setState ({usernameInput : e.target.value});
    }

    passwordHandler = e => {
        console.log(e);
        this.setState ({passwordInput: e.target.value});
    }

    loginSubmit = e => {
        e.preventDefault();
        const username = this.state.usernameInput;
        localStorage.setItem('user', username);
        const password = this.state.passwordInput;
        localStorage.setItem('password', password);

        window.location.reload();
        // let username = this.state.usernameInput
        // comments.push({text: this.state.comment, username: 'Username'});
        // this.setState({comments, comment: ""});
    }

    //    componentDidMount() {
    //      if(localStorage.getItem('user')){
    //          this.setState({loggedIn: true});
    //      } else {
    //          this.setState({loggedIn: false});
    //      }
    //  }

    render() {
        return(
            <div>
                <form onSubmit = {this.loginSubmit}>

                    <input className= "username" 
                    type= "text" 
                    onChange = {this.userHandler} 
                    placeholder = "Username"
                    value = {this.state.usernameInput}
                    />
                    <input className= "password" 
                    type= "text" 
                    onChange = {this.passwordHandler}
                    placeholder = "Password"
                    value = {this.state.passwordInput}
                    />
                    <button onClick = {this.loginSubmit}>Login</button>

                </form>
            </div>
        )
    }
}

export default Login;