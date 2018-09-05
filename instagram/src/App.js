import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import Authenticate from './components/Authentication/Authenticate';

import './App.css';

const AuthenticatedComponent = Authenticate(PostsPage)(Login);

const App = () => {
  return (
    <div className = 'App'>
      <AuthenticatedComponent />
    </div>
  );
}

export default App;
