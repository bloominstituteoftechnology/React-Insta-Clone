import React, { Component } from 'react';
import './App.css';
import { dummyData } from './data/dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import SearchContainer from './components/SearchContainer/SearchContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchContainer className='app-search-container' />
        <div className='app-post-container'>
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
      </div>
    );
  }
}

export default App;
