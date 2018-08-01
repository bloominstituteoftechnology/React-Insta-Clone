import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './SearchBar'
import Comments from './Comments'
import PostContainer from './PostContainer'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  
  componentDidMount(){
    this.setState({data: dummyData});}

    likeBtn(index){
      this.state.likes + 1; 
      }

  render() {
    return (
      <div className="App">
      <SearchBar/>
      <PostContainer handleLikeBtn = {this.likeBtn}
        posts={this.state.data} />
      </div>
    );
  }
}

export default App;
