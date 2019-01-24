import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    changeHandler = event => {
        console.log(event);
        this.setState({[event.target.name]: event.target.value});
    }

    loginHandler = event => {
        event.preventDefault();
        // this.setState({username: event.target.username.value});
        this.props.login({username: this.state.username});
    }

    render() {
        return(
            <div className="login-form">
                <form onSubmit={this.loginHandler}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.changeHandler}
                    />
                    <input 
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }

}
export default Login;

