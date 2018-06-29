import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    window.localStorage.setItem("posts", JSON.stringify(dummyData));
    this.setState({data: dummyData})
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="Posts">
        {this.state.data.map(item => {
          return(
            <PostContainer
              key={Math.random()}
              item={item}
            />
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
