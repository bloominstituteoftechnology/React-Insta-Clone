import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Header from '../Header/Header';
import PostImage from '../Post-Image/Post-Image';
// import dummyData from '../../dummy-data';

const Post = props => {
    return(
        <div>
            <Header dummyData={props.postData} />
            <PostImage dummyData={props.postData} />
            <CommentSection comments={props.postData.comments} />
        </div>
    )
}

export default Post;