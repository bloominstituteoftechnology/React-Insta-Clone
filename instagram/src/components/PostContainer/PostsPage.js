import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = (props) =>{
    return(
        <div className="App">
            <SearchBar />
            {props.dummyData.map(item => {
            return(
                <PostContainer key={item.timestamp} post={item} comments={item.comments}  /> 
            )}) 
            }
        </div>
    )

}

export default PostsPage