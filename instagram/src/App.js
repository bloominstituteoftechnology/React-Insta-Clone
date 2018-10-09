import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts : [],
      userinput: ''
    }
  }

  componentDidMount() {
    this.setState ({
      posts : dummyData
    })
  }

  filter = (event) => {
    event.preventDefault();
    
    this.setState({
      posts: this.state.posts.filter((obj,i,arr) => {
        if (obj.username === this.state.userinput) {
          return obj.username
        } else if (obj.username !== this.state.userinput){
          return arr.posts
        }
      }
    )
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchInput={this.state.searchData} 
          searchHandler={this.searchHandler} 
          filter={this.filter} />
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;

	 