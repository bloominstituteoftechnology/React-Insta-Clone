import React from 'react';
import PostsPage from './components/PostContainer/PostsPage'
import './App.css';
import Authenticate from './components/Authentication/Authenticate'

const App = props => (
  <PostsPage />
);

const AuthenticatedApp = Authenticate(App)

export default AuthenticatedApp;
