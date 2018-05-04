import React from 'react';
// import dummyData from '../../dummy-data';
// import CommentSection from '../CommentSection/CommentSection.js';
import PostHeader from '../PostHeader/postheader.js';
import Image from '../Image/image.js';
// import PostContainer from '../PostContainer/PostContainer.js';
import Likes from '../Likes/Likes.js';

const Post = props =>{
    return (
        <div>
            <PostHeader posterHead={props.postData} />
            <Image picture={props.postData} />
            <Likes />
            {/* <CommentSection comments={props.postData.comments}/> */}
        </div>
    )
}



export default Post;