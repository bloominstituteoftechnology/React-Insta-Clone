import React, { Component } from 'react';
import './App.css';

import CommentSection from './components/CommentSection/commentsection'
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer'
import SearchBar from './components/SearchBar/searchbar'


class App extends Component {
  constructor(props){
    super(props);
    this.state ={ dummyData };
  }
  componentDidMount(){

  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className='top-header'>
          <SearchBar />
        </div> 
        {this.state.dummyData.map((items, i) => 
          <div className='posty' key = {i}>
            <PostContainer content= {items} />
            <CommentSection content= {items} />
          </div>)}
      </div>
    );
  }
}

export default App;
