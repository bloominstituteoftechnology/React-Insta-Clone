import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostsPage from './components/PostContainer/PostsPage.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Authenticate from './components/Authentication/Authenticate';
import PostPage from './components/PostContainer/PostsPage.js';



const App=Authenticate( 
  class App extends Component {
  constructor() {
    super();
    this.state={
      posts:[],
      filteredPosts:[],
      searchBarValue:'',
      username:''

    }
  }
  componentDidMount(){
    const user=localStorage.getItem('username');
    this.setState({username: user});
  }
  
  
  render() {
    return (
      <div className="App">
    <PostPage />
      </div>
    );
  }
}
);

export default App;