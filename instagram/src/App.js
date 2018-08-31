import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = dummyData 
  }


  
  render() {
    
    return (
      <div className="container">
        {this.state.map(data => <PostContainer post={data}/>)} 
      </div>
    );
  }
}

export default App;
