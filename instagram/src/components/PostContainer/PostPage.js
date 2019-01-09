import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
  
    }
  }
  componentDidMount() {
    this.setState({dummyData: dummyData})
  }
  handleSearch = e => {
    let currentData = this.state.dummyData.slice()
    let matchingData = currentData.filter(user => {
      if (user.username === e) {
        return true
      } else {
        return false
      }
    })

    if (matchingData.length > 0) {
      this.setState({dummyData : matchingData})
    } else {
      prompt("User not found")
    }
  }


render() 	{
return (
  <div className="App">
      <SearchBar search={this.handleSearch} />
  

    <PostContainer data={this.state.dummyData}/>

    </div>
    
   )
  } 
} 
export default PostPage;

