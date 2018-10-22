import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostPages from './components/PostContainer/PostPages.js'
import Login from './components/Login/Login.js';
import Authenticate from './components/Authentication/Authenticate.js';

class App extends Component {
	constructor() {
		super()
		this.state = {
		}
	}
	
	
	
	
  render() {
    return (
      <div className="App">
	    <PostPages />
      </div>
    );
  }
}

export default Authenticate(App);