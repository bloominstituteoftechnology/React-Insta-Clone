import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dummyDataList: [],
      inputText:''
    }
  }


    componentDidMount() {
      this.setState({ dummyDataList: dummyData })
    }




  render() {
    return (
      <div className="App">
        <header className="search-bar">
          <SearchBar />
        </header>
        <p className="post-container">
          <PostContainer comments={this.state.dummyDataList}/>
        </p>
      </div>
    );
  }
}

export default App;
