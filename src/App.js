import React, { Component } from 'react';
import './App.css';
import './dummy-data.js';
import {CommentSection} from './components/CommentSection/CommentSection.js';
import './components/PostContainer/PostContainer.js';
import {SearchBar} from './components/SearchBar/SearchBar.js';

class App extends Component {
 
	constructor(){
		super();
		this.state = {
			//users:[...dummy-data]
		};
	}


 render() {
    return (
      <div className="App">

		<h1>InstaClone</h1>
		<SearchBar/>
		<CommentSection/>
      </div>
    );
  }
}

export default App;
