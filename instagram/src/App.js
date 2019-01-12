import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostsPage from './components/PostContainer/PostsPage';
import SidePanel from './components/SidePanel/SidePanel';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PostsPage logout={this.props.logout}/>
        <SidePanel user={localStorage.getItem('username')}/>
      </div>
    );
  }
}

App.propTypes = {
  logout: PropTypes.func,
}

export default App;
