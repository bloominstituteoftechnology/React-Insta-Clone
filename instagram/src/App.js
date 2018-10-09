import React, { Component } from 'react';

import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCommentAlt, faEllipsisH, faCompass, faUser, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import dummyData from '../../dummy-data';

class App extends Component {
  constructor(){
    super();
    this.state= {
      dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
      {this.state.dummyData.map(username => {
        return(
          <PostContainer data = {username} key = {username.timestamp}></PostContainer>
        )
      })}
        <a href = "https://fontawesome.com/license">Icons by FontAwesome</a>
      </div>
    );
  }
}

export default App;
