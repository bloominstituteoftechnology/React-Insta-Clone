import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';

import Authenticate from './Authentication/Authenticate';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true
    }
  }

  render() {


    return (
      <div>
        <h1>test</h1>
        <AppHOC />
      </div>
    );
  }
}

const AppHOC = Authenticate(App);

export default App;
