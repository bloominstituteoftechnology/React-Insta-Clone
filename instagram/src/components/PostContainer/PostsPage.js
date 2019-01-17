import React from 'react';

import SearchBar from '../SearchBar/SearchBar.js';

import PostContainer from './PostContainer.js';

const PostsPage = props =>{

  return(

    <div className = 'posts-page'>
        <PostContainer posts = {props.data} />

    </div>

  );

}

export default PostsPage;
