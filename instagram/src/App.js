import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBarContainer/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';


class App extends Component {
	constructor() {
		super();
		this.state = {
			post: [],
      filteredPosts: []
		};
	}
  componentDidMount() {
  	this.setState({ post: dummyData });
  }

  searchPostsHandler = event => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className="App">
      	<SearchBar searchPosts={this.searchPostsHandler}/>
      	<PostContainer post={this.state.post} />
      </div>
    );
  }
}

export default App;
