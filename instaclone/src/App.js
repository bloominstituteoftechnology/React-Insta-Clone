import React, { Component } from 'react';
import  dummyData  from './dummy-data';
import { PostContainer } from './components/PostContainer/PostContainer';
import { CommentSection }  from './components/CommentSection/CommentSection';
// import { SearchBar } from './components/SearchBar';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Posts: []
    }
  }

  componentDidMount() {
    this.setState({ Posts: dummyData });
  }



  render() {
    return (
      <div className="App">
      <PostContainer post={this.state.Posts}/> 
      <CommentSection post={this.state.Posts}/>
        {/* <SearchBar post= {this.state.Posts}/> */}
      </div>
    );
  }
}

export default App;
