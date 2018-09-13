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

  componentDidMount() {
    console.log('Component did mount!')
    this.setState({ data: dummyData })
  }

  searchInput = event => {
    this.setState({ [event.target.name] : event.target.value })  
  }

  searchSubmit = event => {
    console.log('searching!');
    event.preventDefault();
    // || let filteredData = filteredData.slice()
    // Making a new copy of the array because State is immutable, we should never be manipulating data on the state directly
    // So a copy is made to re-set the state using setState() instead of mutating old data... 
    // Maybe because we're requesting data that is not ours
    let filteredData = [...this.state.data]; 
    
    filteredData = filteredData.filter(element => {
      if (element.username === this.state.searchInput) {
        return element;
      }
    })
    this.setState({data: filteredData})
  }

  render() {
    console.log('Rendering!')
    return (
      <div className="App">
        <SearchBar searchInput={this.searchInput} searchSubmit={this.searchSubmit} />
        <PostContainer postsProps={this.state.data}/>
      </div>
    );
  }
}

export default App;
