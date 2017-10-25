import React, { Component } from 'react';
import './App.css';

import postData from './application-data.js';
import InstagramList from './InstagramList.js';

class App extends Component {
  constructor(){
    super(); //allows us to maintain this.whatever
    this.state = {
      postData: []
    }
  }

  componentDidMount() {//react looks for this component on its own just like render
    const sortedpostData = postData.sort((a, b) => {
      return a.username - b.text;
    });
    this.setState({postData: sortedpostData});
  }

  render() {
    return (
      <div className="App">
        <InstagramList postData={this.state.postData} />
      </div>
    );
  }
}

export default App;
