import React from 'react';
import Auth from './components/Auth/Auth';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';
const App = () => <PostsPage />;

export default Auth(App);