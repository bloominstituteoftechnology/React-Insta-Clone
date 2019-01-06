import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    console.log("Constructor Invoked");
    super();
    this.state = {
      dummyData: [],
      filteredData: []
    }
  }

  componentDidMount() {
    console.log("CDM Invoked");
    this.setState({dummyData: dummyData});
  }
 
  handleSearch = event => {
    let currentData = this.state.dummyData.slice()
    let matchingData = currentData.filter(user => {
      if (user.username === event) {
        return true
      } else {
        return false
      }
    })

    if (matchingData.length > 0) {
      this.setState({dummyData : matchingData})
    } else {
      prompt("User not found")
    }
  }

  render() {
    console.log("Render Invoked")
    return (
      <div className="App">       
       <SearchBar search={this.handleSearch} />

       {this.state.dummyData.map(data => (
         <PostContainer 
            key={data.timestamp} 
            data={data} 
          />
       ))}   
      </div>
    );
  }
}

export default App;
