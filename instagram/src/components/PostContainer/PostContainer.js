import React from 'react';
import './PostContainer.css';
import Post from './Post.js'

const PostContainer = (props) => {
    return (
        <div>
            {props.dummyData.map((data) => {
                return (
                    <Post
                        postData={data}
                        key={Math.random()}
                    />
                )
            })}
        </div>
    )
}

export default PostContainer;