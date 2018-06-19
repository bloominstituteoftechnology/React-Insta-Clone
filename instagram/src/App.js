import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  
  }

  render() {
    return (
      <div className="App">
     		<h1>Instagram</h1>
        <div className="posts">
          {this.state.data.map(data => 
            <PostContainer data={data} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
