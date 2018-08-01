import React from 'react';

class Login extends Component {
    constructor(props){
    super(props);
    this.state = {
        username: '',
        password: ''
        };
    }


    handleInputChange = e => {
        this.setState({[e.target.name]: e.target});
    }

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user',user);
        window.location.reload();

    };
    
    render(){
        return (  
            <form>
                <input
                type="text" 
                placeholder="User Name"
                value={this.state.username}
                onChange= {this.handleInputChange}
                 />
                <input 
                type="password"
                placeholder="Password" 
                value={this.state.password}
                onChange={this.handleInputChange}
                />
                <br />
                <button onClick={this.handleLoginSubmit}>
                Log In 
                </button>
                </form>
        );
    }
}
 
export default Login;