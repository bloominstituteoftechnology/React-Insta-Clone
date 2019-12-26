import React, { Component } from 'react';

import dummyData from '../../dummy-data';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = props => {
    return (
        <div className="postsPage">
            <SearchBar />
            {props.data.map((post, index) => {
            return(
                <PostContainer data={post} index={index} key={index} />
            )
            })}
        </div>
    );
}

export default PostsPage;