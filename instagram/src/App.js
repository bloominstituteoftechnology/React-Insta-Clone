import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

// if App is returned from Authenticate, render the PostsPage
const App = () => <PostsPage />

// Runs App through Authenticate before anything renders
export default Authenticate(App);
