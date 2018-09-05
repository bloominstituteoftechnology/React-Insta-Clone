import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
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

  handleLike = (e) => {
    // every heart will have an id = "like-0", where 0 is some index, so
    // let id = that index, then increase the likes on the data element with that
    // specific index
    let id = e.target.id.substring(e.target.id.indexOf('-') + 1);
    let newData = this.state.data;

    newData[id].likes++;

    this.setState({
      data: newData,
    });
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
        <SearchBar handleSearch = { this.handleSearch } />
        { this.state.data.map((data, index) => {
            return <PostContainer 
              key = { index } 
              index = { index } 
              data = { data } 
              handleLike = { this.handleLike } 
            />
          }) 
        }
      </div>
    );
  }
}

export default App;
