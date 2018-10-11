import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer.js'
import SearchBar from './components/SearchBar/SearchBar.js'
import dummyData from './dummy-data';

class App extends Component {
	constructor() {
		super()
		this.state = {
			dummyData: [],
			search: ''
		};
	}
	
	componentDidMount() {
		this.setState({
			dummyData: dummyData
		});
	}
	
	
  render() {
    return (
      <div className="App">
        <SearchBar />
			<PostContainer data={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
