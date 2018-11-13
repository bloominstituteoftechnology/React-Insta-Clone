import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostList from './components/PostContainer/PostList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filter: ''

    };
  }

  handleInputChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  getFilteredPosts = () => {
    if (this.state.filter === '') return this.state.posts;

    return this.state.posts.filter(post => {
      let username = post.username.toLowerCase().includes(this.state.filter.toLowerCase());
      return username;
    });
  }

  componentDidMount(){
    this.setState({
      posts: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar  filter={this.state.filter} handleInputChange={this.handleInputChange}/>
        <PostList postData={this.getFilteredPosts()} inputComment={this.state.usersComments} handleAddComment={this.handleAddComment} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;


