import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostPages from './components/PostContainer/PostPages.js'


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

export default App;
