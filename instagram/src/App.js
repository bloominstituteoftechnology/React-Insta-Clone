import React, { Component } from 'react';
import './App.css';
import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostsContainer/PostsPage';




class App extends Component {
  constructor() {
    super();
    this.state = {
      
      
      
    };
  }

  loggingIn = event => {
    event.preventDefault();
    if(this.state.loginInput){
      localStorage.setItem('username', this.state.loginInput);
      this.setState({
        loginInput: ''
      });
    }
    
  }

  handleLoginInput = event => {
    this.setState({
      loginInput: event.target.value
    });
  }
 
  render() {
    
    return (
      <div className="App">
        <PostsPage />
        
      </div>
    );
  }
}

export default Authenticate(App);

