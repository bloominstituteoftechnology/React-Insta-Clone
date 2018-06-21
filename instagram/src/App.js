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
	let copy = this.state;
	copy.posts[e.state.props.props.id].likes += 1;
	//this is so close to working...
	//if only I knew how to make it NOT crash the page,
	//it has all the data on it, with likes for the proper
	//post increased by one... :(
	console.log(copy);
	//this.setState({posts:copy});
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
