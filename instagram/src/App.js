import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import Posts from './components/PostContainer/Posts';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummydata: [],
      filteredState: []
    };
  }

  // Set the dummyData when the component mounts
  componentDidMount() {
    this.setState({dummydata: dummyData});
    this.setState({filteredState: dummyData})
  };

  handleSearch = (e) => {
    let updatedList = this.state.dummydata;

    updatedList = updatedList.filter(function(item) {
      return item.username.toLowerCase().search(
        e.toLowerCase()
      ) !== -1;
    });
    this.setState({filteredState: updatedList});
  }

  updateData = (e) => {

  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer hdlSearch={this.handleSearch} />
        <div className="content">
          <Posts data={this.state.dummydata} />
        </div>
        
      </div>
    );
  }
}

export default App;
