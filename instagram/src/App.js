import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage'
import SearchBar from './components/SearchBar/SearchBar'
import Authenticate from './Authenticate';

const App = Authenticate (
class App extends Component {
  constructor(){
    super()
    this.state = {
      instaPosts: []
    }
  }
  componentDidMount() {
    this.setState ({instaPosts: dummyData})
  }

  render() {
    return (
      <div className="desktop">
        <SearchBar/>
        <div className="App">
          <PostsPage instaPost={this.state.instaPosts}/>
        </div>
      </div>
    );
  }
})

export default App;
