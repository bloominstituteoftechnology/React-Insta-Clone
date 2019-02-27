import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     dummyData: [],
     searchdata: []
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    })
  }

  searchBarHandler = e => {
    const post = this.state.dummyData.filter( post => {
      if (post.username.icludes(e.target.value)) {
        return post
      }
    });
    this.setState({
      searchData: post
    })

      
  }

  render() {
    return (
      <div className="App">
       <SearchBar searchPosts={this.searchBarHandler}/>
       <PostContainer postData={
         this.state.searchData.length > 0 ?
         this.state.searchData :
         this.state.dummyData} />
      </div>
    );
  }
}

export default App;
