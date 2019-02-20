import React from "react"

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInput : " ",
            passwordInput : ""
        }
    }

    changeHandler = e=>{
        this.setState ({
            [e.target.name] : e.target.value
        })
        console.log(e.target.value)

    }


    loginHandler =e=>{
        e.preventDefault();
        localStorage.setItem("userInput",this.state.userInput);
        window.location.reload();
    }

    render(){
        return(

            <form onSubmit={this.loginHandler}>
                <input type="text"
                 name="userInput"
                 value={this.state.userInput}
                changeHandler={this.changeHandler}
                />
                <input type="text"
                 name="passwordInput"
                 value={this.state.passwordInput}
                 changeHandler={this.changeHandler}/>
                <button> Login In</button>
            </form>

        )
    }
}

export default Login