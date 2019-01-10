import React from 'react';
import PostContainer from './postContainer';
import SearchBar from '../search/SearchBar';


const PostPage = (props) => {
    return (
        <div>
            <SearchBar
                searchPost={props.search}
            />
            <PostContainer posts={props.postPage.filteredPost.length > 0
                ? props.postPage.filteredPost
                : props.postPage.post
            } />
        </div>
    );
}

export default PostPage;