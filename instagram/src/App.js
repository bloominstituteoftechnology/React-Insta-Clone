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
      

    };
  }

  componentDidMount(){
    this.setState({
      posts: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar  />
        <PostList postData={this.state.posts} inputComment={this.state.usersComments} handleAddComment={this.handleAddComment} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;


