import React from 'react';
import './App.css';


import dummyData from './dummy-data'; 

import PostContainer from './components/PostContainer/PostContainer'; 

import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor () {
    super(); 
    this.state= {
      posts: []
    };
  }

  // componentDidMount with setState
  componentDidMount() {
    this.setState({
      posts: dummyData
    }); 
  }

render () {
  return (
    <div className="App">
      <SearchBar /> 

      <PostContainer posts={this.state.posts}/> 

    </div>
  );
}
}

export default App;

