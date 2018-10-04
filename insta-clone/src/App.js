import React, { Component } from 'react';
import SearchBar from './components/SearchBar/searchbar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';
import './App.css';
// import Header from './components/Header';
// import Post from './components/Post';

class App extends Component {
	constructor(){
		super();
		this.state = {
			Data: [],
		}
	}

	componentDidMount(){
		this.setState( {Data: dummyData} );
	}

	addComment = (e) => {
		const index = e.target.id;
		const newData = this.state.Data;
		newData[index].comments.push({username: "newuser", text: e.target.firstChild.value});
		this.setState({Data: newData});
	}

	render(){
		return (
			<div className="App">
				<SearchBar />
				{this.state.Data.map(((data, index) => <PostContainer click={this.incrementValue} comment={this.addComment} data={data} i={index} key={index} />
				))}
			</div>
		);
	}

}

export default App;