import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate'
import Login from './components/Login/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  login = event => {
    localStorage.setItem('username', this.state.username)
  }

  inputChange = event => {
    this.setState({[event.target.name] : event.target.value})
  }

  render() {
    return (
      
      <div className="App">
        <Authentication login ={this.login} inputChange = {this.inputChange}/>
      </div>
    );
  }
}

const Authentication = Authenticate(PostsPage)(Login);
export default App;
