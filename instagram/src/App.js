import React from 'react';
import './App.css';

import PostPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
const WrappedApp = Authenticate(PostPage);
function App() {
    return (
      <WrappedApp />
    );
}

export default App;
