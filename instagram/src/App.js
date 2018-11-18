import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostSection from './components/PostSection/PostSection';
import SearchBar from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/SearchBar/SearchBar';


class App extends Component {
  constructor() {
    console.log("constructor")
    super();
    this.state = {
      data: dummyData,
      searchText: "",
    }
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
        searchText: event.target.value,
    })
   
}

  searchFilter = event => {
    event.preventDefault();
    this.setState({
      inputText: [console.log("set state")]
    })
    console.log("set filter")    
  }
  
  
  render() {
    console.log("render")
    return (
      <div className="App">
        <SearchBar data = {this.state.data} searchText = {this.state.searchText} handleChange = {this.handleChange}/>
        <PostSection data = {this.state.data} searchText = {this.state.searchText}/>
        
        
      </div>
    );
  }
}

export default App;
