import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: dummyData
    }
  }



  render() {
    const dataSet = this.state.data;
    return (
        <div className="app">
            <SearchBar />
            {dataSet.map(obj => <PostContainer key={obj.id} obj={obj} />)}
      </div>
    )
  }
}

export default App;
