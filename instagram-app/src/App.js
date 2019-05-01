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
      likes: '',
      comments: {
        text: '',
        username: ''
      }
     
    }
  }

  addComment = (e) => {
    e.preventDefault();
    const thisIndex = e.target.getAttribute('index')
    //console.log(this.state.data[thisIndex].comments)
    this.state.data[thisIndex].comments.push({ text: this.state.comments.text, username: this.state.comments.username})
    this.setState({
      data: [...this.state.data ]
    })
  }

  handleChange = e => {
    //console.log(e.target.value)
    //this.state.data[0].comments.push({ text:e.target.value, username: "Billy Bob"})
    this.setState({
      data: [...this.state.data],
      comments: {
        text: e.target.value,
        username: "BillyBob"
      }
    })
  }

  handleLikes = e => {
    const thisIndex = e.target.getAttribute('index')
    console.log(this.state.data[thisIndex])
    // this.setState({
    //   data: [...this.state.data],
    //   likes: newLike
    // })
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
        <SearchBar />
        {this.state.data.map((data, index) => 
          
          <PostContainer className="post" 
          
          data={data} 
          key={index} 
          comments={data.comments} 
          addComment={this.addComment} 
          handleChange={this.handleChange}
          likes={data.likes}
          handleLikes={this.handleLikes}
          index={index}/>)}
      </div>
    );
}}

export default App;