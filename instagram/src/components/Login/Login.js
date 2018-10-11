import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
        }
    }
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleLoginSubmit = event => {
        localStorage.setItem('user', this.state.username);
        localStorage.setItem('password', this.state.password);//I feel like we would never do this 
    };
    render() { 
        return ( 
            <div className="login-container">
                <h1>Please Login to See Posts:</h1>
                <form>
                    <input type="text" placeholder="Username:" onChange={this.handleInputChange}/>
                    <input type="password" placeholder="Password:" onChange={this.handleInputChange}/>
                    <button onClick={this.handleLoginSubmit} type="button" >Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;
