import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      data: dummyData
    };
  }

  liker = timestamp => {
    this.setState({
      liked: !this.state.liked
    });

    let filt = this.state.data.slice().filter(post => post.timestamp === timestamp).pop(),
      negaFilt = this.state.data.slice().filter(post => post.timestamp !== timestamp);

    filt.likes = this.state.liked === false ? filt.likes + 1 : filt.likes - 1;

    negaFilt.unshift(filt);

    this.setState({
      data: negaFilt
    })
  }

  search = e => {
    e.preventDefault();
  }

  submitComment = (timestamp, comment) => {
    const commentMatch = this.state.data.slice().filter(post => post.timestamp === timestamp).pop(),
      commentUnMatch = this.state.data.slice().filter(post => post.timestamp !== timestamp);

    commentMatch.comments.push(comment);

    commentUnMatch.unshift(commentMatch);

    this.setState({ data: commentUnMatch });
  }

  render() {
    return (
      <div className="App">
        <header>
          <i className='fab fa-instagram' />
          <i className='headName'>Instagram</i>
          <SearchBar />
          <div>
            <i className='far fa-compass' />
            <i className='far fa-heart' />
            <i className='far fa-user' />
          </div>
        </header>
        {this.state.data.map(post => (
          <PostContainer
            post={post}
            key={post.timestamp}
            liker={this.liker}
            liked={this.state.liked}
            submitComment={this.submitComment}
          />
        ))}
      </div>
    );
  }
}

export default App;
