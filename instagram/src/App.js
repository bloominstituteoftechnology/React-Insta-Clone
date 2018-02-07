import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/search-bar.js';
import PostContainer from './components/PostContainer/post-container.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <h1 className='app__title'>InstaClone: Luis's Revenge</h1>
        <SearchBar />
        {this.props.data.map((val, i) => <PostContainer key={i} user={val} />)}
      </div>
    );
  }  
}

export default App;
