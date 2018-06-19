import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/searchBar/searchBar';
import Container from './components/postContainer/container';

class App extends Component {
constructor() {
    super();
    this.state = {
      posts:[]
    };
  }
  
  componentDidMount(){
	return (
	this.setState(
	{posts:dummyData}
	)
	);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
		<SearchBar />
        </header>
        <div className="postList">
		<Container 
		data={this.state.posts}
		/>
        </div>
      </div>
    );
  }
}

export default App;
