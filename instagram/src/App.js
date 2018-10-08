import React, { Component } from 'react';
import './App.css';
import { dummyData } from './data/dummy-data'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
      {
        dummyData.map((element,index) => {
          return(
            <div>
              <PostContainer key={index} data={element}/>
              <div className='spacer'>&nbsp;</div>
            </div>
              )
        })
      }
      </div>
    );
  }
}

export default App;
