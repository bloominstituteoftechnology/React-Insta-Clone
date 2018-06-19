import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instagramData: [],
      placeholderUsername: 'lambdaschool'
    }
  }

  componentDidMount() {
    this.setState({instagramData: dummyData});
  }

  addNewComment = (event, comment, index) => {
    event.preventDefault();
    const newData = this.state.instagramData.slice();
    newData[index].comments.push({username: this.state.placeholderUsername, text: comment});
    this.setState({instagramData: newData});
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        <PostContainer instagramData={this.state.instagramData} addNewComment={this.addNewComment} />
      </div>
    );
  }
}

export default App;
