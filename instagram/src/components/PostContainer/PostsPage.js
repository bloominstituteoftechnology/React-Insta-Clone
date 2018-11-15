import React from 'react';
import PostList from './PostList';
import SearchBar from './../SearchBar/SearchBar';
import { Fuse } from 'fuse'


const PostsPage = props => {

    filter = (posts) => {
        let searchOptions = {
            shouldSort: false,
            threshhold: 0.6,
            distance: 0,
            maxPatternLength: 20,
            minMatchChar: 1,
            keys: [
                "username"
            ]
        }
        let fuse = new Fuse(posts, options)
        return fuse.search
    }

    return (
        <>
            <PostList posts={props.posts} />
            <SearchBar />
        </>
    );
};

export default PostsPage;