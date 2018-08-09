import React from 'react';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = event => {
        this.setStatew({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem("credentials", `${this.state} and ${this.state.password}`)
    }
    


    
    render () {
        return (
            <div className="Login">
                <form onSubmit={this.handSubmit}>
                    <input type="text" placeholder="Enter Username"/>
                    <input type="text" placeholder="Enter Password"/>
                    <button>Submit</button>
                </form>
                
            </div>  
        )
    }
} 


export default Login;


// value={this.state.username}
// value={this.state.password}