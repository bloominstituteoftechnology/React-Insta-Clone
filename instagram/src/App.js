import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCompass, faUser, faComment, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';

import './App.css';

library.add(faInstagram, faCompass, faHeart, faUser, faComment, faTrashAlt);

const App = () => {
    return (
      <PostsPage />
    );
}

export default Authenticate(App);
