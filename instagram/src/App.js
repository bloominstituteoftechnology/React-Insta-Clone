import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

import './App.css';

const  App = () => {
    return (
      <div className = 'App'>
        <AuthenticatedComponent />
      </div>
    );
}

const AuthenticatedComponent = Authenticate(PostsPage);

export default App;
