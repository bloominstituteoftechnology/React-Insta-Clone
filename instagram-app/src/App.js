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
  //const user = dummyData.map(data => data.comments)
  //console.log(user)
  //console.log(user.map(item => item))
  
   this.setState({
     data: dummyData,
     comments: dummyData.map(item => item.comments)
    })
  }

  render () {
    return (
      <div className="App">
     
        {this.state.data.map((data, index) => <PostContainer className="post" data={data} key={index} comments={this.state.comments}/>)}
      </div>
    );
}}

export default App;