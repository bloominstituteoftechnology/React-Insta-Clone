import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer'; 

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      data: [], 
      filteredData : []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  filterSearchHandler = (event) => {
    const users = this.state.data.filter(post => {
      if(post.username.includes(event.target.value)){
        return post; 
      }
    }); 
    this.setState({
      filteredData: users
    })
  }

 

  render() {

    let allUsers = null;
    let filteredUsers = null;

    if(this.state.filteredData.length > 0){
      allUsers = null; 
      filteredUsers = this.state.filteredData.map((user, index) =>  {
        return (<PostContainer 
          key = {index}
          usernameImg = {user.thumbnailUrl}
          username = {user.username}
          img = {user.imageUrl}
          likes = {user.likes}
          comments = {user.comments}
          timeStamp = {user.timestamp}
          clickLike = {this.increaseLikeHandler}
        />)
      })
    }else{
      allUsers = this.state.data.map((user, index) =>  {
        return (<PostContainer 
          key = {index}
          usernameImg = {user.thumbnailUrl}
          username = {user.username}
          img = {user.imageUrl}
          likes = {user.likes}
          comments = {user.comments}
          timeStamp = {user.timestamp}
          clickLike = {this.increaseLikeHandler}
        />)
      })
    }

    return (
      <div className="App">
        <SearchBar keyDown = {this.filterSearchHandler} />
        {allUsers}
        {filteredUsers}
      </div>
    );
  }
}

export default App;
