import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBarComponent from './components/SearchBar/SearchBarComponent';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';


class App extends Component {
  constructor(){
    super();
    this.state = {
      posts : []
    }
  }

  componentDidMount() {
    // async fetch calls should happen here
    this.setState ({
      posts : data
    })
  }
  render() {
    console.log(data)
    return (
      <div className="App">
        <SearchBarComponent />
        <PostContainer postsFromAppProps={this.state.posts}/>
      </div>
    );
  }
}

export default App;
