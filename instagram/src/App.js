import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data: dummyData,
    }
  }


  render() {
    return (
      <div>
        <header onClick={console.log(this.state)}>
          <SearchBar />

        </header>
        <div className="container">
        <PostContainer data={this.state.data}/>  
        
        </div>
      </div>
    );
  }
}

export default App;
