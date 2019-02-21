import React from "react"
import {LoginForm,InputStyle,Wrapper} from "./../reusableComp/styles."
import {Button} from"reactstrap"
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInput : "",
            passwordInput : ""
        }
    }
    changeHandler = e=>{
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    loginHandler =e=>{
        e.preventDefault();
        const user = this.state.userInput;
        const pass = this.state.passwordInput;
        localStorage.setItem("user",user);
        localStorage.setItem("pass",pass)
        window.location.reload();
        
    }
    render(){
        return(
<Wrapper>
          <LoginForm>
                <h5>Login Page</h5>
                <InputStyle
                type="text"
                name="userInput"
                value={this.state.userInput}
                onChange={this.changeHandler}
                placeholder="Username"
                />
                <InputStyle type="text"
                 name="passwordInput"
                 value={this.state.passwordInput}
                 onChange={this.changeHandler}
                 placeholder="password"/>
                <Button color="info" size="lg" block onClick={this.loginHandler}
                
                > Login </Button>
            </LoginForm>
</Wrapper>
        )
    }
}

export default Login