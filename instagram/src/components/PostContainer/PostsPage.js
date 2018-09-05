import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = (props) => {
    return (
        <div>
            <SearchBar handleSearch = { props.handleSearch } />
            { props.data.map((data, index) => {
                return <PostContainer 
                    key = { index } 
                    index = { index } 
                    data = { data } 
                />
            }) 
            }
        </div>
    );
}

export default PostsPage;
