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
      posts: [],
      searchValue: ""
    }
  }

  //once component is mounted, set state of App
  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  searchChangeHandler = (event) => {
    event.preventDefault();
    this.setState({ searchValue: event.target.value }, console.log(this.state.searchValue));
  }

  searchUsername = (event, value) => {
    event.preventDefault();
    if(!this.state.searchValue){
      this.setState({
        posts: dummyData
      });
    } else {
      console.log("set posts to regex")
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchValue={this.state.searchValue} searchChangeHandler={this.searchChangeHandler} searchUsername={this.searchUsername} />
        {this.state.posts.map((post, index) => <PostContainer post={post} id={index} key={index} />)}
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
