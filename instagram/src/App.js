import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData  from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData
    };
  }
  // componentDidMount() {
  //   this.setState({data: dummyData});
  // }
  render() {
    return (
      <div className="App">
        <SearchBar users={this.state.data.map(user => { return user.username })}/>
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
