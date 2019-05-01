import React from "react";

class LogIn extends React.Component{
    constructor(props){
        super();
        this.state = {
            username:"",
            password:""
        }
       
    }

    handleInputChange = (e) => {
        this.setState({ input: e.target.value })
    }


render() {
return(
    
    <form>
        <h2>LogIn</h2>

        <input
        className="login-user"
        type="text"
        name="Username"
        placeholder="Username"
        value={this.State.username}
        onClick={this.handleInputChange}/>

        <input
        className="login-Password"
        type="text"
        name="password"
        placeholder="Password"
        value={this.state.password}
        onClick={this.handleInputChange}/>

        <button>
            LogIn
        </button>

    </form>
    
)
}}

export default LogIn;