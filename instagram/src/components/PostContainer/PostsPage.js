import React from 'react';
import PostContainer from './PostContainer'
import SearchBar from '../SearchBar/SearchBar'

const PostsPage = props => {
    console.log(props, 'hello')
    return (
        <div>
        <SearchBar username = {props.posting} />
        <PostContainer posts = {props.posting} />
        </div>
    )
}
export default PostsPage