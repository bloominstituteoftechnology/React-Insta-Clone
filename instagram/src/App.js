import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      filteredData: []
    }
  }

  componentDidMount(){
    this.setState({ data: dummyData})
  }

  searchHandler = event => {
    const data = this.state.data.filter(tempArr => {
      if(tempArr.username.includes(event.target.value)) {
        return tempArr;
      }
    });
    this.setState({ filteredData: data });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          keyword={this.state.keyword}
          search={this.searchHandler}
        />
        <PostContainer
          data={
            this.state.filteredData.length > 0
              ? this.state.filteredData
              : this.state.data
        }
        />
      </div>
    );
  }
}

export default App;
