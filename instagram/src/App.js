import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'


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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {
          this.state.data.map( (userPosts, i) => (
            <PostContainer
              id={i}
              key={userPosts.username + i}
              postData={userPosts}
              addNewPost={this.addNewPost}
            />)
          )
        }        
      </div>
    );
  }
}

export default App;
