import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './PostContainer/PostContainer';
import CommentContainer from './CommentSection/CommentContainer';
import SearchBarContainer from './SearchBar/SearchBarContainer';
import dummyData from './dummy-data';
class App extends Component {
  constructor(props){
    super();
    this.state={
      data: []
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({data:dummyData})
    },2000)
  }
  render() {
    return (
      <div className="App">
        <SearchBarContainer 
        
        />
        <PostContainer 
        
        />
        <CommentContainer 
        
        />
      </div>
    );
  }
}

export default App;
