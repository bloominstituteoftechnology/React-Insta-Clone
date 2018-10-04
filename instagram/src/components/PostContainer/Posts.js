import React from 'react';
import './PostContainer.css';
import PostContainer from './PostContainer';

const Posts = props => {
    return (
        <div>
            {props.dummyData.map(makePost => (
                <PostContainer eachPost={makePost} />
            ))}
        </div>
    );
};

export default Posts;