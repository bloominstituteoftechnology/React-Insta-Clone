import React, { Component } from 'react';
import './App.css';
import Authenticate from './components/authentication/authenticate'


class App extends Component {
  constructor() {
    super();
  }
  login = ()=>{
    // set a username on local storage
    // force update the page
  }

  render() {
    return (
      <div className="App">
        {/* <PostsPage /> */}
        <Authenticate />
      </div>
    );
  }
}

export default Authenticate(App);
