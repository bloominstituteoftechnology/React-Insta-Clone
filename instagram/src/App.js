import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData
    }
  }

  randomIdGenerator = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }




  render() {
    return (
      <div className="App">
      {
        this.state.data.map((user, index) => <PostContainer usrData={user} key={index} />)
      }
      </div>
    );
  }
}

export default App;
