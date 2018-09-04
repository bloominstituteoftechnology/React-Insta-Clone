import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';

import './App.css';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    let newData = data;

    for (let i = 0; i < newData.length; i++) {
      newData[i].hidden = false;
    }
    
    this.setState({
      data: newData,
    })
  }

  handleLike = (e) => {
    let id = e.target.id.substring(e.target.id.indexOf('-') + 1);

    let newData = this.state.data;

    newData[id].likes++;

    this.setState({
      data: newData,
    });
  }

  handleSearch = (e) => {
    let newData = this.state.data;

    for (let i = 0; i < newData.length; i++) {
      if (!newData[i].username.includes(e.target.value)) {
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
