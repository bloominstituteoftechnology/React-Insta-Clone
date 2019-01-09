import React from 'react';
import PostContainer from './PostContainer.js';
import SearchBar from '../SearchBar/SearchBar.js';
import './PostContainer.css';

const PostsPage = props => {
    return (
        <div className="PostsPage">
            <SearchBar filterPost={props.filterPost}
                inputFilteredUserName={props.inputFilteredUserName} />
            {props.dummy.length === 0 ? (
                <h1>Loading</h1>
            ) : (
                    props.dummy.map(post => {
                        return <PostContainer post={post} key={post.timestamp} />
                    }))}
        </div>
    );
}

export default PostsPage;