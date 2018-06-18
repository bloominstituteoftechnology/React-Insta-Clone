import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

class App extends Component {
	constructor() {
		super(); 
		this.state = {
			data: dummyData
		}
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instagram</h1>
        </header>
        <div>
        	<PostContainer dummyData ={this.state.dummyData} />
            </div>,
</div>
           )};  
    
  
}

export default App;
