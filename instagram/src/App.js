import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import dummyData from './data/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  //once component is mounted, set state of App
  componentDidMount() {
    this.setState({
      posts: dummyData.map((post, index) => {
        post.id = index + 1;
        return post;
      })
    });
  }

  submitSearch = (event, value) => {
    event.preventDefault();
    if (!value) {
      this.setState({
        posts: dummyData
      });
    } else {
      const regex = RegExp(value, 'i');
      const filteredDummyData = dummyData.filter((post) => regex.test(post.username));
      if (filteredDummyData.length) {
        this.setState({
          posts: filteredDummyData
        });
      }
      else {
        this.setState({
          posts: []
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar submitSearch={this.submitSearch} />
        {(this.state.posts || []).map((post, index) => <PostContainer post={post} key={post.id} />)}
        {/* {this.state.posts.map((post, index) => {
        if(post.username.contains(searchValue)){
          return <PostContainer post={post} key={index} />
        }
      }) */}

      </div>
    );
  }
}

//validate data
App.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        }))
    })
  )
}

export default App;
