import React from "react";
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
        }
    }



    inputHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    clickHandler = (e) => {
        localStorage.setItem("user", this.state.username);
        window.location.reload();
    }

    render(){
       return (
           <form onSubmit={this.clickHandler}>
             <input type="text"  placeholder="username" name="username" onChange={this.inputHandler}/>
             <input type = "password" placeholder="password" name="password" onChange={this.inputHandler}/>
             <button >Login</button>
           </form>
       );


    }

}

export  default Login