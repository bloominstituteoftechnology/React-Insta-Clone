import React from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: ''
         }
    }
    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value })
    }
    handleSubmit = () => {
        const user = this.state.username;
        localStorage.setItem(
            // set the user info: username: ?
            
        );
        window.location.reload();
    }
    render() { 
        return ( 
            <div>
                <input type='text'
                    value={this.state.username}
                    name='username'
                    onChange = {this.handleChange}
                />
                <input type='password'
                value={this.state.password}
                name='password'
                onChange = {this.handleChange}
                />
                <button onclick={this.handleSubmit}>
                Log In  
                </button>
            </div>
         )
    }
}
 
export default LoginPage;