import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts:[],
      searchText:"",
      
    };
  }


  addNewComment = event => {
    event.preventDefault();
    if (this.state.inputText) {
        this.setState({
            comments: [...this.state.comments, {text: this.state.inputText}],
            inputText: " "
        });
    }
};


handleInput = event => {
  this.setState({
    inputText: event.target.value,
  });
}

  componentDidMount(){
    this.setState({
      posts: dummyData,
      
    })
  }





  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.posts}  />
      </div>
    );
  }
}

export default App;
