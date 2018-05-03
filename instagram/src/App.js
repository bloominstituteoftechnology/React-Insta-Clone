import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import './Components/PostContainer/PostContainer';
import './Components/SearchBar/SearchBar';
import CommentSection from './Components/CommentSection/CommentSection';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount(){
    this.setState({data: {dummyData}});
  }

  render() {
    return (
      <div className = "App">
        <SearchBar />
        <PostContainer data = {this.state.data}/>
        <CommentSection data = {this.state.data}/>
      </div>
    );
    
  };
};

export default App;
