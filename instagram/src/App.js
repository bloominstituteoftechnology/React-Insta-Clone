import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';

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
      <div>
        <SearchBar />
        <div className="main">
          {this.state.data.map((post, i) => <PostContainer
            key={'post' + i}
            change={(e) => this.handleAddComment(e, i)}
            submit={() => this.handleSubmitComment(i)}
            data={post}
            value={this.state.newComment[i]} />)}
        </div>
      </div>
    );
  }
}

export default App;
