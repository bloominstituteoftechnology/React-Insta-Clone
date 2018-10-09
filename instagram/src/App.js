import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/PostContainer/Posts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        postData: dummyData,
      })
    })
  }  

  render() {
    if (!this.state.postData.length) {
      return <h4 id="loader">Loading your feed...</h4>;
    }
    return (
      <div className="App">
        <SearchBar />
        <Posts postData={this.state.postData}/>
      </div>
    );
  }
}

export default App;
