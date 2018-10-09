import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBarContent/SearchBar";
import PostContainer from "./components/PostContent/PostContainer";
import dummyData from './dummy-data';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      data : [],
      comments : [],
    }
  }

componentDidMount(props){
  this.setState({data : dummyData})
  this.setState({comments : dummyData.map(comment =>{return(comment.comments)})})
}

  render() {
    return (
      <div className="App">
        <div className="top-header">
          <SearchBar />
        </div>
        <PostContainer data={this.state.data} commentsState={this.state.comments} />
      </div>
    );
  }
}

export default App;
