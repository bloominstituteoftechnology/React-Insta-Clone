import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {data: []};
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(item => <PostContainer post={item} key={item.timestamp} />)}
      </div>
    );
  }
}

export default App;
