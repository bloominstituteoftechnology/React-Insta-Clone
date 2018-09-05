import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import data from './dummy-data';
import fuzzysearch from 'fuzzysearch';

import './App.css';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    // on component mount, give every piece of data (basically every PostContainer) a
    // new key called hidden which takes on a Boolean value to be used with the search when
    // filtering out by username
    let newData = data;

    for (let i = 0; i < newData.length; i++) {
      newData[i].hidden = false;
    }
    
    this.setState({
      data: newData,
    })
  }

  handleSearch = (e) => {
    // if fuzzysearch returns false, then hide that data element, else 
    // show it
    let newData = this.state.data;

    for (let i = 0; i < newData.length; i++) {
      if (!fuzzysearch(e.target.value, newData[i].username)) {
        newData[i].hidden = true;
      } else {
        newData[i].hidden = false;
      }
    }
    
    this.setState({
      data: newData,
    });
  }

  render() {
    return (
      <div className = 'App'>
        <PostsPage 
          handleSearch = { this.handleSearch } 
          data = { this.state.data } 
        />
      </div>
    );
  }
}

export default App;
