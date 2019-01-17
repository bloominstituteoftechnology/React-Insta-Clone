import React, { Component } from 'react';

import './App.css';

import authenticate from './components/authenticate/authenticate.js';
import LoginContainer from './components/LoginComponents/LoginContainer.js'
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import PostContainer from './components/PostComponents/PostContainer.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ig-clone">
        <HeaderContainer
          postQueryInput={this.props.postQueryInput}
          handleChange={this.props.handleChange} />
        <PostContainer 
          currentUser={this.props.currentUser}
          posts={this.props.postQueryResults}
          postQueryInput={this.props.postQueryInput}
          commentInputs={this.props.commentInputs}
          handleChange={this.props.handleChange}
          handleClick={this.props.handleClick}
          handleKeyDown={this.props.handleKeyDown} />
      </div>
    );
  }
}

export default authenticate(App)(LoginContainer);