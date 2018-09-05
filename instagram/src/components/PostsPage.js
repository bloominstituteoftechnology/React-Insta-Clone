import React from 'react';
import SearchBar from './SearchBar/SearchBarContainer';
import PostsContainer from './PostsContainer/PostsContainer';

const PostsPage = (props) =>{
    return(
        <div>
            <SearchBar
                searchTerm={props.searchTerm}
                searchPosts={props.searchPostsHandler}
            />
            <PostsContainer
                posts={
                    (props.filteredPosts.length>0) ?
                    props.filteredPosts :
                    props.posts
                }
            />
        </div>
    );
}

export default PostsPage;