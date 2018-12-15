import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import dummyData from './dummyData';

class App extends Component {
  constructor () {
    super();
    this.state = {
      dummy: []
    }
  }

  componentDidMount () {
    this.setState({dummy: dummyData})
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <section className="content">
        {this.state.dummy.map(dummyData => (
          <PostContainer key={dummyData.username} dummyData={dummyData} />
        ))}
        </section>
      </div>
    );
  }
}

export default App;
