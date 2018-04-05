import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer.js';

const mainStyles = {
  width: '600px',
  margin: '0 auto'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      'data': dummyData,
      'newComment': []
    };
  }


  handleAddComment = (e, i) => {
    const newComment = this.state.newComment;
    console.log(newComment);
    newComment[i] = e.target.value;
    this.setState({ 'newComment': newComment });
  };

  handleSubmitComment = index => {
    const { data } = this.state;
    data[index].comments.push({username: 'Guest', text: this.state.newComment[index]});
    const newComment = this.state.newComment;
    newComment[index] = '';
    this.setState({ data, newComment: newComment });
  };

  render() {
    return (
      <div className="App">
        {this.state.data.map((post, i) => <PostContainer
          change={(e) => this.handleAddComment(e, i)}
          submit={() => this.handleSubmitComment(i)}
          data={post}
          value={this.state.newComment[i]} />)}
      </div>
    );
  }
}

export default App;