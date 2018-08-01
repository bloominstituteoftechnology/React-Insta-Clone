import React from 'react'; 
import "./Login.css"; 

class Login extends React.Component {
    constructor(){
        super(); 
        this.state = {
            username: '',
            password: ''
        }
    }

    changeUserNameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changePasswordHandler = (event) => {
        this.setState({
            password: event. target.value
        })
    }

    submitDataHandler = (event) => {
        const username = this.state.username; 
        localStorage.setItem("username", username); 
        window.location.reload();
    }

    render() {
        return(
            <div className = "login">
                <form>
                    
                    <div className = "form-components">
                        <img  className = "loginLogo" src = {require("../SearchBar/insta-logo.png")} />
                        <input className = "loginInput" type = "text" placeholder = "Username"  onChange = {this.changeUserNameHandler} required/>
                        <input className = "loginInput" type = "password" placeholder = "Password" onChange = {this.changePasswordHandler} required/>
                        <button onClick = {this.submitDataHandler}>Login</button>
                    </div>
                </form>
             </div>
        )
    }
}

export default Login; 