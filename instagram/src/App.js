import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostList from './components/PostContainer/PostList';
import SearchBar from './components/SearchBar/SearchBar';

import './index.css';

class App extends Component {
	constructor(){
	super();
    // console.log("constructor invoked", this);
		this.state = {
			posts: [],
			filteredPosts: [],
			inputText: "",
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

  // toggle = event => {
  //   event.preventDefault();

  //   let newState = {...this.state};


  //   for (let i = 0; i < newState.todos.length; i++) {
  //     if (newState.todos[i].id === event.target.id) {
  //       if (newState.todos[i].classes.includes("completed")) {
  //         newState.todos[i].classes = newState.todos[i].classes.filter(classItem => classItem !== "completed");
  //       } else {
  //         newState.todos[i].classes.push("completed");
  //       }
  //       newState.todos[i].completed = !newState.todos[i].completed;
  //     }
  //   }

  //   // console.log(event.target.id)
  //   this.setState({...newState});
  // };

  render() {
    // console.log("render invoked", this.state);
    return (
      <div className="container">
      	<SearchBar handleInput={this.handleInput} />
        <PostList 
        	dataList={this.state.posts} 
          upLikes={this.upLikes}
	      />
      </div>
    );
  }
}

export default App;



