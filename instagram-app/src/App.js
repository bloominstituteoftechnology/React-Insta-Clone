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

  addComment = (e) => {
    e.preventDefault();
    const thisIndex = e.target.getAttribute('index')
    console.log(this.state.data[thisIndex].comments)
    // this.setState({
    //   comments: ''
    // })
  }

  handleChange = e => {
    console.log(e.target.value)
  }

  componentDidMount() {
  //const user = dummyData.map(data => data.comments)
  //console.log(user)
  //console.log(user.map(item => item))
  const data = dummyData.map(data => data);
   this.setState({
     data: dummyData,
     
    })
  }

  render () {
    return (
      <div className="App">
      {console.log(this.state.comments)}
        {this.state.data.map((data, index) => 
          
          <PostContainer className="post" 
          
          data={data} 
          key={index} 
          comments={data.comments} 
          addComment={this.addComment} 
          handleChange={this.handleChange}
          index={index}/>)}
      </div>
    );
}}

export default App;