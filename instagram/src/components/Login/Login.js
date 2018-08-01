import React from 'react';

class Login extends React.Component {
    constructor(){
        super();
        this.state={
            username:"",
        }
    }

   
    login =()=> {
    localStorage.setItem("username", `${this.state.username}`);
    }

    save =(event)=> {
        this.setState({username: event.target.value})
    }


    
    render(){
        return(
            <div>
                <form>
                <input value={this.state.username}onChange={this.save} placeholder="Username"/>
                <input placeholder="Password"/>
                <button onClick={this.login}>Login</button>
                </form>
            </div>
        )
    } 
}

export default Login;