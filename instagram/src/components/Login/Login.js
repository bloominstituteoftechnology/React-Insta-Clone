import React, {Component} from 'react';

class Login extends Component{

    constructor(){
        super()

    }

    handleSubmit = (event)=>{
        event.preventDefault();
        //call login
    }

    render(){

        return (

            <div className="login-container">
                <form onSubmit={this.handleSubmit}>
                    <label for="username">Username: </label>
                    <input type="text" id="username" />
                    <label for="pw">Password: </label>
                    <input type="text" id="pw" />
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default Login;