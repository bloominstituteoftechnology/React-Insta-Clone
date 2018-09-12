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

        <React.Fragment className="post-container">
          <PostContainer posts={this.state.dummyDataList}/>
        </React.Fragment>
      
      </div>
    );
  }
}

export default App;
