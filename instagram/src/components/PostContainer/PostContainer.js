import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import { PostWrapper, PostHeader, ThumbImg,  } from '../Styling';

const PostContainer = props => {
    return (
        <PostWrapper >
            <PostHeader >
                <div >
                    <ThumbImg src={props.post.thumbnailUrl} alt="" />
                </div>
                <div >
                    {props.post.username}
                </div>
            </PostHeader>
            <div >
                <img src={props.post.imageUrl} alt="" />
            </div>
            <div >
                <CommentSection comments={props.post.comments} likes={props.post.likes} />
            </div>
        </PostWrapper>
    );
};

export default PostContainer;