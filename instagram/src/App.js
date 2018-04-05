import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'data': dummyData,
      'newComment': [],
      'searchField': ''
    };
  }

  handleAddComment = (e, i) => {
    const newComment = this.state.newComment;
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

  handleAddSearch = e => {
    this.setState({ 'searchField': e.target.value });
  }

  handleLikePost = (toggled, i) => {
    console.log(toggled);
    const { data } = this.state;
    data[i].likes = toggled ? data[i].likes + 1 : data[i].likes - 1;
    this.setState({ 'data' : data });
  }

  render() {
    return (
      <div>
        <SearchBar
          field={this.state.searchField}
          change={e => this.handleAddSearch(e)} />
        <div className="main">
          {this.state.data.map((post, i) => {
            if (post.username.includes(this.state.searchField)) {
              return (<PostContainer
                        key={'post' + i}
                        change={e => this.handleAddComment(e, i)}
                        submit={() => this.handleSubmitComment(i)}
                        like={t => this.handleLikePost(t, i)}
                        data={post}
                        value={this.state.newComment[i]} />
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}

export default App;
