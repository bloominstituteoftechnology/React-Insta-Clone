import React, { Component } from 'react';
import dummyData from "./components/data";
import Search from "./components/SearchBar/Search";
import Posts from "./components/PostContainer/Posts";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data :[]
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ data :dummyData})},500) 
  }

  render() {
    if(this.state.data.length === 0){
      return <h3>loading...</h3>
    }
    return (
      <div className ="Header-section">
        <Search/>
        <Posts posts = {this.state.data}/>
      </div>
    );
  }
}

export default App;
