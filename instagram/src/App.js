import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({ dummyData });
  }

  render() {
    return (
      <div className="App">  
        <SearchBar />
        <PostContainer calcTime={this.calcTime} data={this.state.dummyData} today={this.state.today}/>
      </div>
    );
  }
}

export default App;
