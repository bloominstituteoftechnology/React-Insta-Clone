import React from 'react';
import '../../App.css';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

const PostsPage = props => {
    return (
        <div className="App">
            <SearchBar filter={props.filter} />
            {props.data.map((item, index) => <PostContainer post={item} key={item.timestamp} index={index} like={props.like} liked={item.liked} />)}
        </div>
        );
}

export default PostsPage;

