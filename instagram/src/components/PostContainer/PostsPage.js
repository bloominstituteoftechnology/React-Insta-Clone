import React from 'react';
import PostContainer from './PostContainer.js';
import SearchBar from '../SearchBar/SearchBar.js';

const PostsPage = (props) => {
    return (
        <div>
            <SearchBar
                search={props.search}
                logout={props.logout}
            />
            <PostContainer dummyData={props.dummyData} />
        </div>
    )
}

export default PostsPage;