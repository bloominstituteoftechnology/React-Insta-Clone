import React, { Component } from "react";
import "./App.css";
import "./components/Components.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      names: ""
    };
  }
  componentDidMount(){
    this.setState({data: dummyData}); 
  }
  render() {
    return (
        <div className="background">
         <SearchBar />
        <div className="app-container">
        <PostContainer 
        handleLikeBtn = {this.likeBtn}
        posts={this.state.data} />
      </div>
      </div>
    );
  }
}

export default App;
