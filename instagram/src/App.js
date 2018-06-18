import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends Component {
constructor(props) {
super();
this.state = {
 data: dummyData,
}

}


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBarContainer />
         </header>
        <div className ='post-container'>
        {this.state.data.map(post => {
         return <PostContainer key = {Math.random()} post = {post} />
        })}

       </div>
      
      </div>
    );
  }
}

export default App;
