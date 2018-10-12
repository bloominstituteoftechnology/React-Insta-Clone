import React from 'react';

import PostsPage from './components/PostsPage/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

// import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <PostsPage />;
  }
}


export default Authenticate(App);
