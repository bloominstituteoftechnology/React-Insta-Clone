import React, {Component} from 'react';
// import Authenticate from '../Authentication/Authenticate';

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:''
        }
    }
    handleInput= event=>{
        // event.preventDefault();
        this.setState([event.target.name], event.target.value);
    }

    handleLoginSubmit = event =>{
        const user = this.state.username;
        localStorage.setItem('username', user);
        localStorage.setItem('password', user);
        window.location.reload();
    }

    saveToLocalStorage = event => {
        // this.setState(username: )
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        console.log("hi");
    };
    render(){
        return(
            <form className="login-container">
                <input  className="username" 
                        value={this.props.username}
                        onChange={this.handleInput} />
                <input  className="password" 
                        value={this.props.password}
                        onChange={this.props.handleInput} />
                <button className="login-button" 
                        onClick={(event) =>{
                            event.preventDefault();
                            this.saveToLocalStorage();
                            console.log(this.props.login);
                            localStorage.setItem("loggedIn", "true");
                        }} />
            </form>
        );
    }
}

export default Login;