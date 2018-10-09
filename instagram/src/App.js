import React, { Component } from 'react';
import data from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: 'far fa-heart'
    };
  }

  componentDidMount() {
    this.setState({ data: data });
  }

  likePost = (e, index) => {
    if (e.target.classList.contains('fa-heart')) {
      e.target.classList.toggle('fas');
      e.target.classList.toggle('far');

      const updateLike = this.state.data.map((post, i) => {
        if (index === i) {
          return {
            ...post,
            likes: post.likes + 1
          };
        } else {
          return post;
        }
      });

      this.setState({ data: updateLike });
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map((d, i) => {
          return (
            <PostContainer data={d} key={i} id={i} likePost={this.likePost} />
          );
        })}
      </div>
    );
  }
}

export default App;
