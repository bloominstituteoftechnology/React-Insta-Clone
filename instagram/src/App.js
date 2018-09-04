import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';

import './App.css';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      inputText: '',
      data: data,
    }
  }

  handleChange = (e) => {
    this.setState({inputText: e.target.value});
  }

  handleClick = (e) => {
    let newData = this.state.data;

    newData[e.target.id].comments.push({
      username: 'philzcoffee',
      text: this.state.inputText,
    });

    this.setState({
      data: newData,
      inputText: '',
    });
  }

  handleLike = (e) => {
    let id = e.target.id.substring(e.target.id.indexOf('-') + 1);

    let newData = this.state.data;

    newData[id].likes++;

    this.setState({
      data: newData,
    });
  }

  render() {
    return (
      <div className = 'App'>
        <SearchBar />
        { this.state.data.map((data, index) => {
            return <PostContainer 
              key = { index } 
              submitIndex = { index } 
              data = { data } 
              state = { this.state } 
              handleChange = { this.handleChange } 
              handleClick = { this.handleClick } 
              handleLike = { this.handleLike } 
            />
          }) 
        }
      </div>
    );
  }
}

export default App;
