import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts : dummyData,
      userinput: '',
    }
  }

  componentDidMount() {
    this.setState ({
      posts : dummyData
    })
  }

  searchHandler = (event) => {
    event.preventDefault();

    if ( event.keyCode === 13 && event.target.value.length > 0 ) {
          let newData = this.state.posts.filter( (posts) => {
            return posts.username === event.target.value;
          })
          this.setState({ posts: newData });
          event.target.value = "";
        }
      }
    
  

  render() {
    return (
      <div className="App">
        <SearchBar searchHandler = {this.searchHandler} />
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;

	 