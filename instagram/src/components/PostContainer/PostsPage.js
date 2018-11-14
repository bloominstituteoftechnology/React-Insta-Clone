import React from 'react'
import PostContainer from './PostContainer.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Authentication from '../../Authentication/Authentication.js';

function PostsPage(props){
    
      return (
        <div className='main-page'>
          <SearchBar 
            logout ={props.logout}
          />
          <div className='posts-container'>
            {props.posts.map((post, index)=>(
              <PostContainer
                user = {props.user}
                post = {post}
                key ={index}
              />  
            ))};
          </div>
        </div>
      );
    }
  
  
  export default Authentication(PostsPage);