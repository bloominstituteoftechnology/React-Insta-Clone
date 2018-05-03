import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: []
    };
  }
    componentDidMount() {
      this.setState ({ dummyData });
    }
    
  render() {
    return (
      <div>
        <SearchBar />
        {this.state.dummyData.map((Post,index) => <PostContainer key={index} post={Post} />)}
      </div>
    );
  }
}

export default App;
