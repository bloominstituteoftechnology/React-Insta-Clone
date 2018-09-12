import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchInput: ""
    }
  }

  searchSubmit = event => {
    console.log('searching!');
    event.preventDefault();
    let filteredData = this.state.data;
    filteredData.filter((element) => 
      {if(element.username === this.state.searchInput) {
        this.setState({ data: element })
      }}
    );
  }

  searchInput = event => {
    this.setState({ [event.target.name] : event.target.value })  
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchInput={this.searchInput} searchSubmit={this.searchSubmit} />
        <PostContainer postsProps={this.state.data}/>
      </div>
    );
  }
}

export default App;
