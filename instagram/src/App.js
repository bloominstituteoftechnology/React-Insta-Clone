import React, { Component } from 'react';
import './css/index.css';
// import DummyData from './dummy-data.js';
import PostsPage from './components/PostContainer/PostsPage.js';
import Authentication from './components/Authentication/Authentication.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      displayData: [],
      searchValue: '',
    }
  }

  render() {
    return (
      <div >
        <PostsPage
          // logOut={this.logOut}
        />
      </div>
    );
  }
}

export default App;
