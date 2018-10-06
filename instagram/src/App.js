import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      dummyData: dummyData,
      comments: dummyData.comments,
    };
  }

  componentDidMount(){
    this.setState({
      dummyData: dummyData,
      comments: dummyData.comments,
    })
  
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(item => {
          return(
            <PostContainer key={item.timestamp} post={item} comments={item.comments}  /> 
          )}) 
        }
      </div>
    );
  }
}


export default App;
