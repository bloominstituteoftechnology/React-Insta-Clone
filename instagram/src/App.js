import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import Posts from './components/PostContainer/Posts';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummydata: []
    };
  }

  // Set the dummyData when the component mounts
  componentDidMount() {
    this.setState({dummydata: dummyData});
  };

  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <div className="content">
          <Posts data={this.state.dummydata}/>
        </div>
        
      </div>
    );
  }
}

export default App;
