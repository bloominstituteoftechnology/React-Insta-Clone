import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';



class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      search: '',
    };
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = (event) => {
    localStorage.setItem('username', '{event.target.value}');
  }

  searchPosts = (event) => {
    event.preventDefault();
    let newPosts = [...this.state.postData];
    newPosts = newPosts.filter(post=> {
      return post.username === this.state.search;
    })
    this.setState({ postData: newPosts })

    }

  componentDidMount = () => {
     this.setState({ postData: dummyData })
  }

  render() {
    return (

      <div className="App">
        <PostsPage
        handleChange={this.handleChange}
        searchPosts={this.searchPosts}
        postData={this.state.postData}
        />
      </div>
    )}

}




export default Authenticate(App);
