import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchContainer from './components/SearchBar/SeachContainer';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      text: '',
      username: '',
      likes: 0
    }
  }

  componentDidMount() {
    this.setState({data: dummyData})
  }

  liked = e => {
    this.setState({ likes: this.state.likes + 1})
  }

  render() {
    return (
      <div>
        <SearchContainer />
        <PostContainer user={this.state.data} likes={this.state.likes} liked={this.liked}/>
      </div>
    );
  }
}

export default App;
