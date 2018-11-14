import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authenticaltion/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filter: '',
      username: ''

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
    const storedUsername = JSON.parse(localStorage.getItem('username'));
    if (storedUsername){
      this.setState({username: storedUsername})
    }

    this.setState({
      posts: dummyData
    })

  }

  render() {
    return (
      <div className="App">
        <PostsPage filter={this.state.filter} handleInputChange={this.handleInputChange} postData={this.getFilteredPosts} inputComment={this.state.usersComments} handleAddComment={this.handleAddComment} handleChange={this.handleChange} username={this.state.username}/>
      </div>
    );
  }
}

export default Authenticate(App);


