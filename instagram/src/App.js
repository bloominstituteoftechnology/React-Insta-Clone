import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile:[],
    };
  }

  componentDidMount() {
    this.setState({ profile: dummyData});
  }

  someFunction() {
    return false;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar />
        </header>
        
        <PostContainer profile = {this.state.profile} />
      </div>
    );
  }
}

export default App;
