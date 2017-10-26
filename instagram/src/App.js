import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { postData } from './application-data.js';
import PostList from './PostList.js';
import Search from './Search.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      postData: []
    }
    this.handleQuery = this.handleQuery.bind(this);
  }

  componentDidMount() {
    this.setState({postData});
  }

  handleQuery(event) {
    this.setState({query: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <Search
          changeHandler={this.handleQuery}
          query={this.state.query}
          />
        <PostList postData={this.state.postData} />
      </div>
    );
  }
}

export default App;
