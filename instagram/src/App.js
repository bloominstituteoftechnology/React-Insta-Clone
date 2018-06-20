import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostsPage from './components/PostContainer/PostsPage'
// import PostContainer from './components/PostContainer/PostContainer'
// import SearchBar from './components/SearchBar/SearchBar'
import Authenticate from './Authentication/Authenticate';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      authenticate: Authenticate
    }
  }

  componentDidMount() {
    this.setState({posts: dummyData})
  }

  render() {
    return (
      
      <div className="App">
        <header className="App-header">        
          <h1 className="App-title">Instagram App</h1>
        </header>       
        <PostsPage posting = {this.state.posts}
        authenticate = {this.state.authenticate} />
      </div>
    );
  }
}

export default App;
