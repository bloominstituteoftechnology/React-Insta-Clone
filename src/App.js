import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  
search = event => {
  event.preventDefault();
  let newPosts = [...this.state.posts];
  newPosts=newPosts.filter(post=>{
    console.log(post)
    return post.username === this.state.search;
  }
  );
  this.setState({posts: newPosts});
};

handleChange = event => {
  event.preventDefault ();
  this.setState({[event.target.name]: event.target.value});
};

componentDidMount(){
  this.setState({posts: dummyData});
  
 }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.search} handleChange={this.handleChange}/>
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
