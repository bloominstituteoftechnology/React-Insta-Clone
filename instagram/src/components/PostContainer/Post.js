import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection.js';
import { PostDiv } from '../../Styles';

const Post = props => {
    return (
        <PostDiv>
            <PostHeader post={props.post}/>
            <CommentSection post={props.post} index={props.index}/>
        </PostDiv>
    );
}

export default Post;