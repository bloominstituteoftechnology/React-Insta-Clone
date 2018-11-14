import React, { Component } from 'react';
import PostContainer from './PostContainer';
// import Authenticate from './components/Authentication/Authentication';
import SearchBar from '../SearchBar/SearchBar';

const PostsPage = props => {
    return (
        <div>
            {/* <LoginPage 
                posts={props.posts}
            />  */}
            <div>
                <SearchBar 
                    filterComments={props.filterComments}
                    filterInput={props.filterInput}
                />
            </div>
            <div>
                <PostContainer 
                    posts={props.posts}
                />
            </div>
      </div>
    )
}

export default PostsPage