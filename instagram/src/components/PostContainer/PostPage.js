import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostsContainer';


const PostPage = props => {
    return (
        <div>
            <SearchBar posts={props.posts} 
            handleInput={props.handleInput}
            value={props.value}/>
            <PostContainer posts={props.filteredPosts.length > 0 ? props.filteredPosts : props.posts} />
        </div>
    );
}

export default PostPage;