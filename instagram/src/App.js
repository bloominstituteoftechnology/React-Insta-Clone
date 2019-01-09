import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostsPage from './components/PostContainer/PostsPage';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PostsPage logout={this.props.logout}/>
      </div>
    );
  }
}

App.propTypes = {
  logout: PropTypes.func,
}

export default App;
