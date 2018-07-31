import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer'; 

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }


  render() {

    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map((user, index) =>  {
          return <PostContainer 
            key = {index}
            usernameImg = {user.thumbnailUrl}
            username = {user.username}
            img = {user.imageUrl}
            likes = {user.likes}
            comments = {user.comments}
            timeStamp = {user.timestamp}
            clickLike = {this.increaseLikeHandler}
          />
        })}
      </div>
    );
  }
}

export default App;
