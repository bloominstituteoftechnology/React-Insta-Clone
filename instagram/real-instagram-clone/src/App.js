import React, { Component } from 'react';
import Data from './dummy-data'
import './App.css';
import Header from './Header'
import PostContainer from './components/PostContainer'

class App extends Component {
  constructor(){
    super();
    this.state={
      Data:Data
    }
    // console.log(Data)
  }
  render() {
    return (
      
      <div className="App">
      <div>
        <Header />
        </div>
        <div>
        <PostContainer post= {this.state.Data}/>
      </div>
      </div>
    );
  }
}

export default App;
