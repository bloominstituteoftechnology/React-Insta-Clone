import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js'
import SearchBar from './components/SearchBar/SearchBar.js'

class App extends Component {
	constructor() {
		super()
		this.state = {
			data: dummyData
		}
	};
	
	
	
  render() {
    return (
      <div className="App">
		<h1>INSTAGRAM APP BOIIIII</h1>
        <SearchBar />
		{this.state.data.map(data =>(
			<div key={Math.random()}>
			<PostContainer post={data} />	
			</div>
		))}
      </div>
    );
  }
}

export default App;
