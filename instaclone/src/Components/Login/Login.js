import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = { 
            username:'',
            password:''
        }
    }

    // this is not dry and I would like to ask how to handle this
    changeHandler= event=>{
        this.setState({[event.target.name]: event.target.value})
    }

    // handles the submit an event by passing props up to app, 
    // and passing props up to the authenticate component
    submitHandler = (event) =>{
        event.preventDefault();
        this.props.login(this.state.username,this.state.password)
        this.props.toggleLogin();
    }

    render() { 
        return ( 
            <div className="login-container">
                <form action="" onSubmit={this.submitHandler}>
                    <input type="text" 
                        name="username" 
                        value={this.state.username}
                        onChange={this.changeHandler} 
                    />
                    <input type="password" 
                        name="password" 
                        value={this.state.password}
                        onChange={this.changeHandler} 
                    />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}
 
export default Login;