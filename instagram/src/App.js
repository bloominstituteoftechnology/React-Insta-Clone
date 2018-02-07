import React, { Component } from 'react';
import { Panel, Image, Grid, Row, Col, Clearfix } from 'react-bootstrap';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'

import './App.css';

class App extends Component {
  nextId = 1;
  state = {
    id: 1,
    allPosts: [],
    renderedPosts: [],
  };

  componentDidMount() {
    this.setState({
      allPosts: dummyData,
      renderedPosts: dummyData,
    });
  }

  getNextId = () => {
    return this.nextId++;
  }

  filterPosts = (filter) => {
    if (filter === '') {
      this.setState({ renderedPosts: this.state.allPosts});
    } else {
      const filterPosts = this.state.allPosts.filter(
        post => post.username.includes(filter));
        this.setState({
          renderedPosts: filterPosts })
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <SearchBar posts={this.state.renderedPosts}
          filterPosts={this.filterPosts} />
        </div>
        <div>
        {this.state.renderedPosts.map((post, i) => {
          return (
            <PostContainer key={i} post={post} />
          )
        })}
        </div>
        <br />
      </div>
    )
  }
}

export default App;
