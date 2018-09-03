import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostList from './components/PostContainer/PostList';
import SearchBar from './components/SearchBar/SearchBar';

import './index.css';

class App extends Component {
	constructor(){
	super();
		this.state = {
			posts: [],
			inputText: "",
      boolVal: false,
		}; 
	}

	handleInput = event => {
    this.setState({
      inputText: event.target.value,
    });
  };

  componentDidMount(){
    this.setState({
      posts: dummyData,
    })
  }

  upLikes = event => {
    event.preventDefault();

    let newState = {...this.state};

    for (let i = 0; i < newState.posts.length; i++){
      if (newState.posts[i].id == event.target.id){
        newState.posts[i].likes = newState.posts[i].likes + 1;
      }
    }

    this.setState({...newState});
  }

  searchPosts = event => {
    event.preventDefault();
    let newState = {...this.state};
    const filter = newState.posts.filter((post) => post.username === newState.inputText);

    for (let i = 0; i < newState.posts.length; i++){
      if (newState.inputText === newState.posts[i].username){
        newState.boolVal = true;
      } 
    }

    if (newState.boolVal === false){
      this.setState({
        posts: dummyData,
        inputText: "",
      })
    } 

    if (newState.boolVal === true) {
      this.setState({
        posts: filter,
        inputText: "",
      })
    }

  }

  render() {
    return (
      <div className="container">
      	<SearchBar handleInput={this.handleInput} searchPosts={this.searchPosts} input={this.state.inputText} />
        <PostList 
        	dataList={this.state.posts} 
          upLikes={this.upLikes}
	      />
      </div>
    );
  }
}

export default App;



