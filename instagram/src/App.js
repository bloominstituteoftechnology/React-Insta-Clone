import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'

class App extends Component {
  render() {
    return (
      <div>
        <div className={SearchBar}>
        </div>
        <div class={PostContainer}> {
          dummyData.map(prop => {
            return; ( <PostContainer />)
          })
        }
        </div>
        <div className={CommentSection}>
        </div>
     </div>
    );
  }
}

export default App;
