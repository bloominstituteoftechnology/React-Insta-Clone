import React from 'react';
import './login.css'

class Login extends React.Component {
    constructor(){
        super();
        this.state={
            username:"",
            clicked: false,
        }
    }

   
    login =()=> {
    localStorage.setItem("username", `${this.state.username}`);
    this.setState
    }

    save =(event)=> {
        this.setState({username: event.target.value})
    }

    beingClicked = () => {
        
    this.setState({clicked:true})
        
    }

    release = () => {
        this.setState({clicked: false})
    }


    
    render(){
        return(
            <div className="page">
                <p className="instaplog">Instaclone</p>
                <div className="login">
                    <form className="form">
                        <input className="usernamelog" value={this.state.username}onChange={this.save} placeholder="Username"/>
                        <input className="usernamelog"placeholder="Password"/>
                        <button className={this.state.clicked ? "boop":"btnlog"} onMouseMove={this.release}onMouseDown={this.beingClicked} onClick={this.login}>Log in</button>
                    </form>
                </div>
            </div>
        )
    } 
}

export default Login;