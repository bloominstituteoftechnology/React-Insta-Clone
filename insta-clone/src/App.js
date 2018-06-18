import React from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import Posts from './posts.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <header className="searchBar">

        </header>
        <div class="posts">
          <Posts data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
