import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


console.log(dummyData);

class App extends Component {
  constructor(){
    super();
    this.state={
      posts: []
    }
  }

  componentDidMount(){
    this.setState({ posts: dummyData})
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="container">
        
        {this.state.posts.map((data, index) => (
          <PostContainer
            data ={data}
            />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
