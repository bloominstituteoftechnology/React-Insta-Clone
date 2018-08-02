import React, { Component } from 'react';
import './css/index.css';
// import DummyData from './dummy-data.js';
import PostsPage from './components/PostContainer/PostsPage.js';
import Authentication from './components/Authentication/Authentication.js';
import Login from './components/Login/Login.js';

const HOCAuthentication = Authentication(App);
const HOCLogin = Authentication(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      displayData: [],
      searchValue: '',
    }
  }

  render() {
    return (
      <div >
        <Login />
        {/* <HOCAuthentication /> */}
        <PostsPage />
      </div>
    );
  }
}

export default App;
