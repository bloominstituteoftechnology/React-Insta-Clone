import React from 'react'; 
import logo from './instagramlogo.jpg';
import './Authentication.css';
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
                <div className = "loginHeader">
          
                    {/* <div className ="leftSideSearchBar"><i className="fab fa-instagram"></i> <span className="verticalLine">&#124;</span><span className ="logoTitle">Instagram</span> </div> */}
                    <img className = "logo" src={logo} alt="Instagram Logo"/>
          
                </div>
                <div>
                    <form className = "credentials">
                        <h1>UserName</h1>
                        <input onChange = {this.handleUsernameChange} type="text" value = {this.state.username}/>
                        <h1>Password</h1>
                        <input className="passwordInput" onChange={this.handlePasswordChange} type="text" value = {this.state.password}/>
                        <br/>
                        <button onClick ={this.handleSubmit}>Login</button>
                    </form>

                </div>
            </div>

        );
    }
}

export default LoginPage; 