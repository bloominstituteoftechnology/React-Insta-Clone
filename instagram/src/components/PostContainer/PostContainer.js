import React from 'react';
import Post from '../Post/Post';


const PostContainer = props => {
   const insta = props.postList.map((postData, index) => {
        return (
            <Post key={index} postData={postData} />
        );
    })


    return (
        <div>
            {insta[0]}
            {insta[1]}
            {insta[2]}
        </div>
    )
};

export default PostContainer;