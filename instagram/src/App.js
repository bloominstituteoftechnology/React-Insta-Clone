import React, { Component } from 'react';
import './App.css';

import PostsPage from './Components/PostContainer/PostsPage.js';
import Authenticate from './Authentication/Authenticate.js';
import dummyData from './dummy-data.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      loginInput: '',
      passwordInput: '',
      inputText: '',
      username: '',
      search: []
    }
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

  handleOnSubmit = (event, user) => {

  }

  handleOnChange = (e) => {
    this.setState({
      inputText: e.target.value,
    }, this.filterSearch(e.target.value))
  }

  filterSearch(value) {
    let searchItem = this.state.posts.filter(post => {
      return post.username.includes(value)
    }).map(item => item.username)

    this.setState({
      search: [...searchItem]
    })
    
  }

  login = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    localStorage.setItem('username', JSON.stringify(e.target.value))

  }

  

  
  render() {
    return (
      <div className="App">
        
        <PostsPage 
          handleOnChange={this.handleOnChange}
          inputText={this.state.inputText}
          loginInput={this.state.loginInput}
          passwordInput={this.state.passwordInput}
          logOut={this.props.logOut}

          login={this.login}
          searchItem={this.state.search}
          posts={this.state.posts}
          user={this.state.username}/>
      
      </div>
    );
  }
}

export default Authenticate(App);
