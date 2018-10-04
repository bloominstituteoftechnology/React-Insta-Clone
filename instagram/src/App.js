import React, { Component } from 'react';
import PostContainer from './components/PostContainer';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  render() {
    return (
      <div>
        <h1>instagram</h1>
        <span>
          {dummyData.map((post,i)=><div key={i}><PostContainer container={post}/></div>)}
        </span>
        <div><PostContainer/></div>
      </div>
    )
  }
}
        
      
   
      
      
   
  


export default App;
