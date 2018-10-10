import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js'
import PostListContainer from '../PostListContainer/PostListContainer.js'

const PostsPage = (props) =>{

    return (
        <div>
            <SearchBar searchPosts={props.searchPosts} />
            <PostListContainer postData={props.postData} addComment={props.addComment} />
        </div>
    )
}

export default PostsPage;

