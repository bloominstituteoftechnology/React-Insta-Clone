import React from 'react';
import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostsContainer/PostsPage';

const App = () => <PostsPage />;

export default Authenticate(App);
