import React from 'react';

class LogIn extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
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
            username: nuPw
        })
    }

    submitDataToStorage = (e) => {
        e.prevenDefault();
        console.log("submitdata");
        
        // localStorage.setItem('name', this.state.username);
        // localStorage.setItem('password', this.state.password);
        // console.log(localStorage.getItem('name'));
        
    }




    render(){
        return (
            <form onSubmit={this.submitDataToStorage}>
                <input type="text" placeholder="username" onChange={this.handleUsernameChange} />
                <input type="text" placeholder="password" onChange={this.handlePasswordChange} />
            </form>
        )
    }
    
}

export default LogIn;