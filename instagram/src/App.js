import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer.js'
import SearchBar from './components/SearchBar/SearchBar.js'

class App extends Component {
	constructor() {
		super()
		this.state = {
		}
	}
	
	
	
  render() {
    return (
      <div className="App">
        <SearchBar />
			<PostContainer />	
      </div>
    );
  }
}

export default App;
