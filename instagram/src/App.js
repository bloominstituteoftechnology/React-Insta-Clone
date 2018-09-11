import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import Search from './components/SearchBar'
import Posts from './components/PostContainer'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dummyDataList: dummyData
    }
  }



  render() {
    return (
      <div className="App">
        <header className="search">
          <Search />
        </header>
        <p className="post">
          <Posts comments={this.state.dummyDataList}/>
        </p>
      </div>
    );
  }
}

export default App;
