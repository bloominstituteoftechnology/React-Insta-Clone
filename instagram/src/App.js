import React, { Component } from 'react';
import './App.css';

import PostsPage from './Components/PostContainer/PostsPage.js';
import dummyData from './dummy-data.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      inputText: '',
      user: 'Nomadic4Life',
      search: []
    }
  }

  componentDidMount = () => {


     

    this.setState({
      posts: [...dummyData],
      userInputText: dummyData.map(user => {
        return {username: user.username, inputText: ''}
      }),
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

  
  render() {
    return (
      <div className="App">
        <PostsPage 
          handleOnChange={this.handleOnChange}
          inputText={this.state.inputText}
          
          searchItem={this.state.search}
          posts={this.state.posts}
          user={this.state.user}/>
      
      </div>
    );
  }
}

export default App;
