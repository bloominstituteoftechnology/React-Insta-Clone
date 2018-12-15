import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    card: []
  };

  componentDidMount() {
    this.setState({ card: dummyData });
  };

  handleAddComment = (text, id) => {
    console.log(text);
    console.log(id);
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.card} addComment={this.handleAddComment} />
      </div>
    );
  }
}

App.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.object
  )
};

export default App;
