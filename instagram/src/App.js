import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      username: 'macdaddy',
      inputText: ''
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <SearchBar />
          </header>
        </div>
        <div>
          <PostContainer p={this.state.posts} />
        </div>
      </div>
    );
  }
}

PostContainer.propTypes = {
  p: PropTypes.oneOf({
    username: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default App;
