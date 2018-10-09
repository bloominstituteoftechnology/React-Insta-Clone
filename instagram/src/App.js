import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBarContent/SearchBar";
import PostContainer from "./components/PostContent/PostContainer";
import dummyData from './dummy-data';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      data : []
    }
  }

componentDidMount(props){
  this.setState({data : dummyData})
}

  render() {
    return (
      <div className="App">
        <div className="top-header">
          <SearchBar />
        </div>
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
