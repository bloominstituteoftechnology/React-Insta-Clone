import React, { Component } from 'react';
import './App.css';
import PostsPage from '../src/components/PostsPage.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dummydata: [],
      searchString: ''
    }
  }

  componentDidMount(){
    // this.setState({
      
    // })
  }

  render(){
    return <PostsPage />
  }

  
}

export default App;
