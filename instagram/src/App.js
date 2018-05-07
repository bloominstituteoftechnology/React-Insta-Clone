import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import CommentSection from './components/CommentSection/CommentSection.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userPost: []
    }
  }

  componentDidMount(){
    this.setState({ userPost: dummyData});  
  }

  render() { 
    return (
      <div className="App">
        <header>
          <SearchBar />
        </header>
        <p className="App-intro">Instagram Clone!</p>
        <div className="Posts">
          {this.state.userPost.map((post, index) => {
            return <PostContainer key="index" post ={post}/>
          })}
        </div>        
      </div>
    );
  }
}

export default App;
