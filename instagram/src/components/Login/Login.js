import React, { Component } from 'react';
import PostsPage from '../PostContainer/PostsPage'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showComponent: false,
        };
        this.loginSubmitHandler = this.loginSubmitHandler.bind(this);
    }

    loginInputHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    loginSubmitHandler() {
        this.setState({
            showComponent: true,
        });
    }

    render () {
        return (
            <div>
            <form>
                <img className="Insta-name" src="http://www.freelogovectors.net/wp-content/uploads/2016/12/InstagramLogo-768x217.png" alt="insta name"/>
                <input
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.loginInputHandler} />
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.loginInputHandler} />
                <button onClick={this.loginSubmitHandler}>
                    Log in
                </button>
                {this.state.showComponent ?
           <PostsPage /> :
           null
        }
            </form>  
            </div>
        )};
}

export default Login;