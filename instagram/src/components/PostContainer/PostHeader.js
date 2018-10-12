import React from 'react';
import PropTypes from "prop-types";
import { PostHead, PostHeadImg, PostHeadH4, PostImg } from '../../Styles';

const PostHeader = props => {
    return (
        <div>
            <PostHead>
                <PostHeadImg src={props.post.thumbnailUrl} alt="profile"/>
                <PostHeadH4>{props.post.username}</PostHeadH4>
            </PostHead>
            <PostImg src={props.post.imageUrl} alt="post"/>
        </div>
    );
}

PostHeader.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string.isRequired,
    })
}

export default PostHeader;