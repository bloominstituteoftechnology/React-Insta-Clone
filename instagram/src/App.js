import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {dummyData.map(data => {
          return <PostContainer data={data}/>
        })}
      </div>
    );
  }
}

export default App;
