import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render(){
        return(
            <div className="login-container">
                <h1 className="login-title"> Instagram </h1>
                <form>
                    
                    
                    <div className="login-label">
                        <label> Username: </label>
                    </div>
                    <input
                        className="login-input"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange} />
                        
                        
                        
                    <div className="login-label">
                        <label> Password: </label>
                    </div>
                    <input
                        className="login-input"
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                        
                    <button
                        className="login-submit"
                        type="submit"
                        onClick={this.handleLoginSubmit}> Submit </button>
                </form>
            </div>
        )
    }
}

export default Login;