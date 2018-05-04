import React from 'react';
import Post from '../Post/Post';


const PostContainer = props => {
    return (
        <div>
           {props.postList.map((postData, index) => {
        return (
            <Post key={index} postData={postData} />
        );
    })}
        </div>
    )
};

export default PostContainer;