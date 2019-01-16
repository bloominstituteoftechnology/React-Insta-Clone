import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login'
import './App.css';
import authenticate from './components/authentication/authenticate';


class App extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: "",
      loggedIn: false,
    }
  }
  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  loginSubmit = e => {
    // e.preventDefault();
    if(this.state.username && this.state.password){
      localStorage.setItem("username", `${this.state.username}`);
      localStorage.setItem("password", `${this.state.password}`);
      console.log(localStorage);
    }
  }
  loggedIn = () =>{
    if(localStorage.username){
      this.setState({loggedIn: true});
    }
  }

  render() {
    return (
      <div className="App">
       {window.onload = this.loggedIn}
        <Login 
        handleChanges={this.handleChanges}
        loginSubmit={this.loginSubmit}
        />
        <PostPage />
      </div>
    );
  }
}


export default App;
