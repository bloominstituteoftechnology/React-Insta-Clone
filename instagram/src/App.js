import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/searchBar/searchBar';
import Container from './components/postContainer/container';

class App extends Component {
constructor() {
    super();
    this.state = {
      posts:[],
	  comment:''
    };
  }
  
  addLike = e => {
	let copy = this.state.posts.slice();
	copy[e.state.props.props.id].likes += 1;
	// clone/copy/slice() this.state.posts.
	// select object we want to change
	// change the object's likes
	// set state
	console.log(copy.posts);
	console.log(this.state);
	this.setState({posts:copy});
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
		addLike={this.addLike}
		data={this.state.posts}
		/>
        </div>
      </div>
    );
  }
}

export default App;
