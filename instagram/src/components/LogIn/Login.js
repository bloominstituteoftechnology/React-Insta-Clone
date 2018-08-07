import React from 'react';

class LogIn extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false
        }
    }

    handleUsernameChange = (e) => {
        let nUser = e.target.value;
        this.setState({
            username: nUser
        })
    }

    handlePasswordChange = (e) => {
        let nuPw = e.target.value;
        this.setState({
            password: nuPw
        })
    }

    submitDataToStorage = (e) => {
        // e.preventDefault();
        localStorage.setItem('name', this.state.username);
        localStorage.setItem('password', this.state.password);
        this.setState({
            isLoggedIn: true
        })
        
    }




    render(){
        return (
            <form onSubmit={this.submitDataToStorage}>
                <input type="text" placeholder="username" onChange={this.handleUsernameChange} />
                <input type="text" placeholder="password" onChange={this.handlePasswordChange} />
                <button type="submit"></button>
            </form>
        )
    }
    
}

export default LogIn;