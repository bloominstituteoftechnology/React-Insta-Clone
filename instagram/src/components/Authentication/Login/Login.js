import React from 'react'; 

class LoginPage extends React.Component {
    constructor(){
        super();
        this.state = {username: "", password: "", loggedIn: false}; 
    }

    handleUsernameChange = event => {
        this.setState({username: event.target.value});
    };

    handlePasswordChange = event => {
        this.setState({password:event.target.value});
    };

    handleSubmit = event => {
        //event.preventDefault();
        const username = this.state.username.slice(); 
        const password = this.state.password.slice(); 
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        this.setState({loggedIn: true}); 

    }

    render() {

        return (

            <div className = "loginPage">
                <div>
                    <form action="">
                        <h1>UserName</h1>
                        <input onChange = {this.handleUsernameChange} type="text" value = {this.state.username}/>
                        <h1>Password</h1>
                        <input onChange={this.handlePasswordChange} type="text" value = {this.state.password}/>
                        <button >Login</button>
                    </form>

                </div>
            </div>

        );
    }
}

export default LoginPage; 