import React, { Component } from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import dummyData from "./dummy-data";
 class App extends Component {
  
  constructor(){
    super();
    this.state = {
      data: [],
      comments: []
    };
  }
   componentDidMount(){
    this.setState({
      data: dummyData,
      comments: dummyData.comments
    });
  }
   
   render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer 
        data={this.state.data}
        comments={this.state.comments}  
      />
      </div>
    );
  }
}
 export default App;