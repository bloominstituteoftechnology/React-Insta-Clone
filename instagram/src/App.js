import React, { Component } from 'react';
import dummyData from './dummy-data';
import Search from './components/SearchBar/Search';
import Post from './components/PostContainer/Post';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      comments: '',
      data: []
    }
  }
  componentDidMount() {
    this.setState({data: dummyData});
  }  
  
  render() { 
    return (      
      <div className="App" >
      <header className="App-header">
      <h1 className="App-title">Instagram</h1>
      </header>
        <Search />
        {this.state.data.map(data => <Post key={data.username} data={data}/>)}      
      </div>
    );
  }
}

export default App;
