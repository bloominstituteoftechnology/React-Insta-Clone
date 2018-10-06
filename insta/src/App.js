import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);
library.add(faComment);
library.add(faCompass);
library.add(faUser);
library.add(faSearch);



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comments: [],
      commentInput: ''
    };
  }

  componentDidMount() {
    const comments = [];

    dummyData.map(data => {
      return comments.push(data.comments);  
    })

    this.setState({
      data: dummyData,
      comments: comments
    });
  }

  addNewComment = (index, event) => {
    if(event.which === 13) {
      this.setState({
        commentInput: '',
        comments: this.state.comments[index].push({
          username: 'Cyanide6033',
          text: event.target.value,
          id: Date.now()
        })
      })
      console.log(this.state.comments);
    }
  }

  handleSubmit = event => {
      this.setState({
        commentInput: event.target.value
      });
  }

  render() {
    return (
      <>
        <SearchBar />
        <PostContainer posts={this.state.data} comments={this.state.comments} commentInput={this.state.commentInput} handleSubmit={this.handleSubmit} addNewComment={this.addNewComment} />
      </>
    );
  }
}

export default App;
