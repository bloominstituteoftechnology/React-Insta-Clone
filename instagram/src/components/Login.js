import React, {Component} from 'react';
// import '../src/./App.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state= {
            username: '',
            password: ''
        };
    }

    inputHandler=input=>{
        this.setState({ [input.target.name]: input.target.value })
    }

    loginSubmitHandler=el=>{
        const user=this.state.username;
        localStorage.setItem('user',user);
    }
    
    render(){
        return(
            <form className="login">
                <label>
                    Insta Clone Login Page
                </label>
                <input
                type="password"               
                placeholder="Please Enter Password"                
                name="password"                
                value={this.state.password}                
                onChange={this.inputHandler}  
                >

                </input>
                <button onClick="loginSubmitHandler">
                    Log In
                </button>
            </form>
        );
    }
}
 

export default Login