import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: []
    };
  }

  componentDidMount() {
    this.setState({name: dummyData});
  }
  
  render() {
    console.log(this.state.data);
    return (
      <div>
        <SearchBar />
        <PostsPage name={this.state.name} />
      </div>
    );
  }
}

export default App;
