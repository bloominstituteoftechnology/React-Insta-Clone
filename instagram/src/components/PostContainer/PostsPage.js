import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import PostList from './PostList';

const PostsPage = props => {
    return (
    <React.Fragment>
        <SearchBar  filter={props.filter} handleInputChange={props.handleInputChange}/>
        <PostList postData={props.postData()} inputComment={props.usersComments} handleAddComment={props.handleAddComment} handleChange={props.handleChange} username={props.username}/>
    </React.Fragment>
    );
};

export default PostsPage;