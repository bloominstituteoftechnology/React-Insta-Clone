import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      data: [],
    }
  }
  
  componentDidMount() {
    const data = dummyData;
    this.setState({data});
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {
          this.state.data.map(obj => {
            return (
              <PostContainer 
                key={obj.username}
                post={obj}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
