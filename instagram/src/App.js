import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'; 
import PostConatainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  constructor(){
    super()
    this.state = {
        data: [],
        search: '',
        searchedPost: []
    }
  } 
  componentDidMount(){
    this.setState({data : dummyData})
  }

  updateSearch = event => this.setState({search : event.target.value})

  searchPosts = event =>{
    event.preventDefault();
    let post = this.state.data.filter(data => {
      if (data.username.includes(this.state.search)){
        return data;
      }
    });
    this.setState({searchedPost: post, search:''})
  }

  render() {
    console.log(this.state.data)
    console.log(this.state.search)
    console.log(this.state.searchedPost)
    return (
      <div className="App">
        <SearchBar 
          handleUpdateSearch = {this.updateSearch}
          handleSearch = {this.searchPosts}
          value = {this.state.search}
        />
        {this.state.searchedPost.length > 0
          ?this.state.searchedPost.map(data =>
          <PostConatainer data = {data} />
        )
          :this.state.data.map(data =>
          <PostConatainer data = {data} />
        )}        
      </div>
    );
  }
}

export default App;
