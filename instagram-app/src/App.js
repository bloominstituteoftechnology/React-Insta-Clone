import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Body from './components/Body';
import Header from './components/Header';



class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: dummyData,
      filteredPosts: [],
      likes: dummyData[0].likes
      
    };

    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body posts={this.state.posts} clicker={this.heartClick} />
      </div>
    );
  }
}



export default App;
