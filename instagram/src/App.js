import React, { Component } from 'react';
import './less/App.less';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/LoginPage/LoginPage';


let storage = window.localStorage
    storage.setItem('username', 'cotikor')
    storage.setItem('password', 'password1')

class App extends Component {
	constructor(props){
        super(props);
        this.state = {
            usernameInput: '',
			passwordInput: '',
            username: storage.getItem('username'),
            password: storage.getItem('password')
        }
    }

    authenticateLogin(username, password){
        if (username === this.state.username && password === this.state.password){
            return true
        } else {
            return false
        }
	}
	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<div className="App">
        <PostsPage />
		<Login usernameInput={this.state.usernameInput} passwordInput={this.state.passwordInput} />
			</div>
		);
	}
}

export default App;

