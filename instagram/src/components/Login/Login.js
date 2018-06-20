import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: this.getUserName(),
            password: ''
        }
    }

    getUserName = () => {
        return localStorage.getItem("userName") === null ?  "" :  localStorage.getItem("userName");
    }

    userNameHandler= e => {
        this.setState({userName: e.target.value});
    }

    login = userName => {
        localStorage.setItem("userName", this.state.userName);
        this.setState({userName: ''});
      }

      
    render(){
        return (
            <div className="login">
               UserName: <input className="user-name"
                                type="text"
                                value={this.state.userName}
                                onChange={this.userNameHandler} />
                Password: <input type="password"/>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }

}

export default Login;