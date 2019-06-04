import React from "react";
import StyledInput from "./StyledInput";
import Button from"./Button";

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
               <h1 style={{textAlign:"center",color:"blue"}}>SIGN UP!!!!</h1>
               ;
             <StyledInput type="text"  placeholder="USERNAME" name="username" onChange={this.inputHandler}/>


             <br/> <StyledInput type = "password" placeholder="PASSWORD" name="password" onChange={this.inputHandler}/>
             <Button >Login</Button>
           </form>
       );


    }

}

export  default Login