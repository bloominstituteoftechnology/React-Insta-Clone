import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor (){
    super();
    this.state={
      posts: [],
      inputComment: ""
    };
  }

  handleInput = event =>{
    this.setState({inputComment:event.target.value
    })
  } 

  addNewComment = (event, index) =>{
    // let currentPosts = this.state.posts.slice();
    // currentPosts.push([...currentPosts, {

    // }])
    // this.setState()
    console.log(event.target);
  }

  componentDidMount(){
    // updatedPosts=this.state.posts.slice();
    // updatedPost
    this.setState({posts:dummyData});
  }

  render() {
    // console.log(this.state.posts);
    return (
      <div className="App">
        <SearchBar />{
        this.state.posts.map( postObject => {
          return <PostContainer key={postObject.username} postObject={postObject} addNewComment={this.addNewComment}/>
        })
      }</div>
    );
  }
}

export default App;
