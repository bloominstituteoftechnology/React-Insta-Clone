import React, { Component } from 'react';
import PostContent from './components/PostContent';
import SearchBar from './components/SearchBar';
import CommentSection from './components/CommentSection';
import dummyData from './components/dummy-data';
import './App.css';

class App extends Component {
 constructor() {
   super();
    this.state = {
      dummyData: dummyData
    };
 }




  render() {
    return (
      <div className="App">
        <div className='instaContainer'>
          <div className='searchBar'>
            <SearchBar />
          </div>
          <div className='PostContent'>
            <PostContent />
          </div>
          <div className='Comment'>
            < CommentSection />
            <div> {this.state.dummyData.map(item => <CommentSection item={item} comments ={item.comments} />)} </div>
          </div>
        </div>
    </div>

    );
  }
}

export default App;
