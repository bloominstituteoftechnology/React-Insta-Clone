import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    console.log('contructor is running');
    // responsible for setting up the component's initial state - with available data
    super();
    this.state = {
      posts: []
    };
  }


  componentDidMount() {
  
    // we will add any other data to state (async fetch calls)
    console.log(dummyData);
  
    this.setState( {posts: dummyData} );
 
    console.log('CDM is running', this.state.posts);
  }


  render() {
    console.log('render', this.state.posts);

    return (
      <div className="App">
          <PostContainer posts={this.state.posts}/>

      </div>
    );
  }
}

export default App;
