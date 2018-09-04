import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state={
      posts:[]
    }
  }
  componentDidMount(){
    this.setState({posts:dummyData});
  }
  render() {
    return (
      <div className="App">
       <SearchBar/>
       <div className='posts'>
       {this.state.posts.map((e)=><PostContainer data={e} key={e.username}/>)}
      </div>
      </div>
    );
  }
}

export default App;
