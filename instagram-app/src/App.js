import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comments: ''
     
    }
  }

  componentDidMount() {
  
   this.setState({
     data: dummyData,
     comments: dummyData.filter(item => item.comments)
    })
  }

  render () {
    return (
      <div className="App">
      {console.log(this.state.comments)}
        <SearchBar />
        {this.state.data.map((data, index) => <PostContainer className="post" data={data} key={index} comments={this.state.comments.map(comment => comment)}/>)}
      </div>
    );
}}

export default App;