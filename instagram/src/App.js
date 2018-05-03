import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      instaFeed: []
    }
  }

  componentDidMount(){
    this.setState({ instaFeed: dummyData}); // here we are setting empty people array to people array in people.js. 
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer instaFeed={this.state.instaFeed}/>
      </div>
    );
  }
}

export default App;
