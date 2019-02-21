import React from "react"

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

            <div >
                <input
                type="text"
                name="userInput"
                value={this.state.userInput}
                onChange={this.changeHandler}
                />
                <input type="text"
                 name="passwordInput"
                 value={this.state.passwordInput}
                 onChange={this.changeHandler}/>
                <button onClick={this.loginHandler}
                > Login In</button>
            </div>

        )
    }
}

export default Login