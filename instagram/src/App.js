import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      data:[],
      user:"New User"
    }
  }

  componentDidMount(){
    this.setState({
      data:dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Instagram</header>
        <SearchBar />
        <PostContainer post={this.state.data}/>
      </div>
    );
  }
}

export default App;
