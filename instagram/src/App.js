import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import data from '../src/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
    };
  }

  
  // using componentDidMount lifecycle method to pass stuff from 'data' to the state
  componentDidMount() {
    console.log('CDM: Component Did Mount');
    this.setState({posts: data}); 
  }
  
  
  render() {
    return (
      <div className="App">        
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
