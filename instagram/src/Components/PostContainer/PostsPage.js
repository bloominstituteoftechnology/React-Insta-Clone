import React, { Component } from 'react';
import '../../App.css';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar.js'; 
import PostContainer from './PostContainer.js'; 


class PostsPage extends Component {
  constructor(){
    super(); 
    this.state = {
      data: [],
      input: ''
    }
  }

  componentDidMount(){
    this.setState({
      data: dummyData
    });
  }

  searchHandler = str => {
    const filterPost = dummyData.filter(post => {
      return post.username.includes(str)
    })
    this.setState({data: filterPost})
  }

  render() {
    if(!this.state.data.length){
      return <h3>"Loading..."</h3> 
    }

    return (
      <div className="App">
        <SearchBar searchHandler={this.searchHandler} 
                   inputHandler={this.inputHandler}
                   dummyData={this.state.data}
                   /> 
        <PostContainer dummyData={this.state.data} /> 
      </div>
    );
  }
}

export default PostsPage;
