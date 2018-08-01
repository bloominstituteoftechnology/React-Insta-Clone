import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostPage from './components/PostContainer/postpage';
import Authenticate from './components/Authentication/authenticate';
import Login from './components/login/login';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      searchQuery: '',
      usernameInput: ''
    };
  }

 

  componentDidMount() {
    const user = localStorage.getItem("user")
    this.setState({data: dummyData})
  };

  login() {
    const username = this.state.data.username.slice();
    localStorage.setitem(username, this.state.input);
    console.log(username);
  };

  handleSearchChange = event => {
    this.setState({searchQuery: event.target.value})
  };

  searchPostsHandler = event => {
    event.preventDefault();
    const posts = this.state.data.filter((item) => {
      if(item.username === event.target.value) 
        return posts;
    });
    this.setState({data: posts})
  };

  render() {
   return (
     <div>
      <Login onclick={this.login}/>
      <PostPage 
        data={this.state.data} 
        searchQuery={this.state.searchQuery} 
        searchPosts={this.searchPostsHandler}
        onChange={this.handleSearchChange}
      />
     </div>     
   )
  }
}

export default Authenticate(App);