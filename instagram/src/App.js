import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import Header from './Components/SearchBar/Header';
import PostsPage from './Components/PostContainer/PostsPage';

/* Come back to this later.
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
*/

import './Reset.css';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.postNumber = 0;
    this.state = {
      data: {},
      searchTerm: '',
    }
    this.username = "C137";
    this.commentText = "Add a comment...";
    this.searchTerm = '';
  }

  addCommentClickHandler = (postID) => {
    if (this.commentText === 'Add a comment...') {
      return;
    }

    let username = this.username;
    let text = this.commentText;

    let comment = {username, text};
    console.log(comment);
    this.setState ({
      data: this.state.data.map(data => {
        if (data.timestamp === postID) {
          data.comments.push(comment);
          return data;
        }
        return data;
      })
    })
  }

  commentTextOnChange = (event) => {
    this.commentText = event.target.value;
    console.log(this.commentText, " ", event.target.value);
  }

  likeClickHandler = (postID) => {
    this.setState({
      data: this.state.data.map(data => {
        if (data.timestamp === postID) {
          data.likes++;
          return data;
        }
        else { return data }
      })
    })
  }

  changeSearchTerm = (event) => {
    this.searchTerm = event.target.value;
    this.setState({
      searchTerm: this.searchTerm
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: dummyData
      });
    }, 500);
  }

  render() {
    if (!this.state.data.length) {
      return (
        <div className="App">
        <Header changeSearchTerm={this.changeSearchTerm} />
        <h1>Loading posts...</h1>
        </div>
      )
    }
    return (
      <div className="App">
        <PostsPage 
        changeSearchTerm={this.changeSearchTerm}
        likeClickHandler={this.likeClickHandler}
        data={this.state.data}
        clickHandler={this.clickHandler}
        commentTextOnChange={this.commentTextOnChange}
        addCommentClickHandler={this.addCommentClickHandler}
        commentText={this.commentText}
        searchTerm={this.searchTerm}
        />
        })}
      
      </div>
    );
  }
}

export default App;
