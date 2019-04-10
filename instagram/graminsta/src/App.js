import React, { Component } from 'react';
import dummyData from "./dummy-data.js"
import Searchbar from "./Components/Searchbar.js"
import PostContainer from "./Components/PostContainer.js"
import CommentSection from "./Components/CommentSection.js"
import './App.css';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        userData = []
      }

    }
    componentDidMount() {
      this.setState({userData:dummyData}) 
    }
    
  
  render() {
    return (
      <div className="App">
        <Searchbar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
