import React, { Component } from 'react';
import './App.css';
import SearchbarContainer from "./components/SearchBar/SearchbarContainer";
import PostContainer from "./components/Post Container/PostContainer";
import dummyData   from "./dummy-data";
import CommentSectionContainer from "./components/CommentSection/CommentSectionContainer";

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[dummyData]
    };
}
  render() {
    return (
      <div className="App">
        <SearchbarContainer />
        <>
        <PostContainer usernames={this.state.data[0]} thumbnail={this.state.data[0]} ids={this.state.data[0]} postimg={this.state.data[0]}  />
        <CommentSectionContainer comments={this.state.data[0][0].comments[0]}  commentusers={this.state.data[0][0].comments[0]} / >

        <div>
          {this.state.data[0][0].comments[1].text}
        </div>
        </>
      </div>
    );
  }
}

export default App;
