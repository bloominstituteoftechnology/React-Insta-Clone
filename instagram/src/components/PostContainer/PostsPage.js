import React from 'react';

import SearchBar from '../SearchBar/SearchBar.js';

import PostContainer from './PostContainer.js';

const PostsPage = props =>{

  return(

    <div className = 'posts-page'>

        <SearchBar submitFunction = {props.submitFunction} handleChange = {props.handleChange} fieldValue = {props.fieldValue}/>

        <PostContainer posts = {props.data} />

    </div>

  );

}

export default PostsPage;
