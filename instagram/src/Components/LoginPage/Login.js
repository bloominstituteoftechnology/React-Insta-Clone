import React from 'react'; 
import "./Login.css"; 
import {Form, Input, Button} from 'reactstrap'; 


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
        const password = this.state.password; 
        localStorage.setItem("username", username); 
        localStorage.setItem("password", password); 
        window.location.reload();
    }

    render() {
        return(
            <div className = "login">
                    <Form className = "form-components">
                        <div className = "loginLogo">
                            <i className="fab fa-instagram fa-2x"></i>
                            <img  src = {require("../SearchBar/insta-logo.png")} />
                        </div>
                        <Input className = "loginInput" type = "text" placeholder = "Username"  onChange = {this.changeUserNameHandler} required/>
                        <Input className = "loginInput" type = "password" placeholder = "Password" onChange = {this.changePasswordHandler} required/>
                        <Button onClick = {this.submitDataHandler}>Login</Button>
                    </Form>
             </div>
        )
    }
}

export default Login; 