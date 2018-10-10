import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    console.log('contructor is running');
    // responsible for setting up the component's initial state - with available data
    super();
    this.state = {
      posts: [],
      search : '',
    };
  }

  onInputChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }
  componentDidMount() {
    this.setState( {posts: dummyData} );
  }

  render() {
    console.log('render', this.state.posts);

    return (
      <div className="App">
          <SearchBar search={this.state.search} 
                onInputChange={this.onInputChange}/>
          <PostContainer posts={this.state.posts} search={this.state.search}/>

      </div>
    );
  }
}

PostContainer.propTypes = {
  username: PropTypes.string,
    thumbnailUrl:PropTypes.string,
 };


export default App;
