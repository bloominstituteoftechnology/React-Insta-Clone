import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchContainer from './components/SearchBar/SearchContainer';
import PostContainer from './components/PostContainer/PostContainer';
class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
      username: '',
      comment: '',
    };
  }
  changeComment = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  addComment = (e) => {
  }
  render() {
    return (
      <div className="App">
        <SearchContainer />
        {this.state.instaData.map((dataItem,i) => {
          return <PostContainer key = {i} dataItem={dataItem} />
        })
        }
      </div>
    );
  }
}

export default App;
