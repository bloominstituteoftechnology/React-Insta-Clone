import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    this.setState({
      posts: dummyData
    });
  }

  addNewComment(comment, index){
    console.log("Add comment: ", comment);
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        {this.state.posts.map((post)=>{
          return(
            <div key={post.timestamp} className="containers">
              <PostContainer post={post} addNewComment={this.addNewComment}/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
