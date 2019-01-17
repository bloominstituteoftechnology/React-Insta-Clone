import React from 'react';

import './App.css';

import authenticate from './components/authenticate/authenticate.js';
import LoginContainer from './components/LoginComponents/LoginContainer.js'
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import PostContainer from './components/PostComponents/PostContainer.js';

const App = props => {
  return (
    <div className="ig-clone">
      <HeaderContainer
        postQueryInput={props.postQueryInput}
        handleChange={props.handleChange} />
      <PostContainer 
        currentUser={props.currentUser}
        posts={props.postQueryResults}
        postQueryInput={props.postQueryInput}
        commentInputs={props.commentInputs}
        handleChange={props.handleChange}
        handleClick={props.handleClick}
        handleKeyDown={props.handleKeyDown} />
    </div>
  );
}

export default authenticate(App)(LoginContainer);