import React, { Component } from 'react';
import Fuse from 'fuse.js';
import './App.scss';

import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {

  constructor() {

    super();

    this.state = {

      data: [],
      displayedData: [],
      username: 'captaincrunch17'

    }

  }

  componentDidMount() {

    let initialData = dummyData;

    if (localStorage.data) {

      initialData = JSON.parse(localStorage.data);

    }

    this.setState({data: initialData, displayedData: initialData});

  }

  componentDidUpdate() {

    localStorage.data = JSON.stringify(this.state.data);

  }

  addComment = (comment, index) => {

    const newData = this.state.data;
    newData[index].comments.push(comment);

    this.setState({data: newData});

  }

  removeComment = (postIndex, commentIndex) => {

    const newData = this.state.data;
    newData[postIndex].comments.splice(commentIndex, 1);
    this.setState({data: newData});

  }

  addLike = postUrl => {

    const index = this.state.data.findIndex(item => item.imageUrl === postUrl);
    const newData = this.state.data;

    if (!newData[index].likedBy) {

      newData[index].likedBy = [];

    }

    if (!newData[index].likedBy.includes(this.state.username)) {

      newData[index].likes++;
      newData[index].likedBy.push(this.state.username)

    }

    else {

      newData[index].likes--;
      newData[index].likedBy.splice(newData[index].likedBy.indexOf(this.state.username), 1);

    }

    this.setState({data: newData});

  }

  search = searchTerm => {

    const options = {
      shouldSort: true,
      threshold: 0.5,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "username"
      ]
    };

    const fuse = new Fuse(this.state.data, options);
    const result = fuse.search(searchTerm);

    this.setState({displayedData: searchTerm === '' ? this.state.data : result});

  }

  render() {
    return (
      <div className='app'>

        <PostsPage
          displayedData={this.state.displayedData}
          searchFunc={this.search}
          addLike={this.addLike}
          addComment={this.addComment}
          removeComment={this.removeComment}
          username={this.state.username}
        />

      </div>
    );
  }
}

export default App;
