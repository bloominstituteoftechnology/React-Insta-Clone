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

  liker = () => {
    this.setState({
      liked: !this.state.liked
    });
  }

  search = e => {
    e.preventDefault();
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
          />
        ))}
      </div>
    );
  }
}

export default App;
