import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = props => {
    return (
        <div className="PostsPage">
            <SearchBar 
            searchInput={props.searchInput} 
            searchSubmit={props.searchSubmit}
            searchLogout={props.searchLogout}/>
            <PostContainer postsProps={props.postsProps}/>        
        </div>
    )
}

export default PostsPage;