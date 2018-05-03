import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'


class App extends Component {
  constructor(){
    super();
    this.state ={
      data: []
    }
  }
  // handleNewComment = (e) => {
  //   console.log('Hello from hanldeNewComment')
  //   this.setState( {newPostText: e.target.value} );
  // }
  addNewPost = (id, postUser, postText) => {
    console.log('Hello from addNewPost');
    const newPost = {username: postUser, text: postText};
    const newData = this.state.data.slice();
    newData[id].comments.unshift(newPost);
    console.log(newData);
    this.setState( {data: newData } );
  }
  componentDidMount(){
    this.setState( {data: dummyData} );
  }
  render() {
    // console.log(dummyData);
    // console.log(JSON.stringify(dummyData));
    return (
      <div className="App container-fluid">
        <SearchBar />
        <div className="container custom-container">
          <div className="row">
            {
              this.state.data.map( (userPosts, i) => (
                <PostContainer
                  className="row.12"
                  id={i}
                  key={userPosts.username + i}
                  postData={userPosts}
                  addNewPost={this.addNewPost}
                />)
              )
            } 

          </div>
        </div>
      </div>
    );
  }
}

export default App;
