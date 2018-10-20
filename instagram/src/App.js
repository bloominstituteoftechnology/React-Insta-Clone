import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PropTypes from "prop-types";
import PostsPage from './PostContainer/PostsPage';
import authentication from './Authentication/Authenticate';
import Login from './Login/Login';


class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
  this.setState({
    data: dummyData
  })
}

  render() {
    return (
          <PostsPage data={this.state.data} />
    );
  }
}


App.default = {
  likes: 0,
  comments: {
      text: "Be the first to comment!"
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(
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
              })
          )
      })
  ),
}

export default authentication(Login)(App);