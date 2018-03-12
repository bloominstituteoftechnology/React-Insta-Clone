import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Posts: [],
    };
  }
  componentDidMount() {
    this.setState({ Posts: dummyData });
  }

  search() {

  }

  render() {
    return (
      <div className="Container">
        <div id="Nav-Bar">
          <a href="https://www.google.com/search?q=instagram&rlz=1C5CHFA_enUS779US779&oq=instagram&aqs=chrome.0.0j69i60l3j0j69i60.2467j0j1&sourceid=chrome&ie=UTF-8">Instagram</a>
            <form>
              <input type="text" placeholder="Search" value="" />
            </form>
        </div>
        <PostContainer posts={this.state.Posts} />
      </div>
    );
  }
}

export default App;



