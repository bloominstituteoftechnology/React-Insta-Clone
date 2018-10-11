import React, {Component} from 'react';
import './login.css'

class Login extends Component{

    constructor(){
        super()
        this.state = {
            username: ''
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        localStorage.setItem('username', this.state.username);
        //reload the app
        window.location.reload();
    }

    handleChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }


    render(){

        return (

            <div className="login-container">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" onChange={this.handleChange} value={this.state.username} />
                    <label htmlFor="pw">Password: </label>
                    <input type="text" id="pw" />
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default Login;