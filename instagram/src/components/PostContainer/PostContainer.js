import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


const PostContainer = props => {
        return (
        <div>
            <div>
                <img src={props.post.thumbnailUrl}></img>
                {props.post.username}
            </div>
            <img src={props.post.imageUrl}></img>
            <CommentSection comments={props.post.comments} />
        </div>
        )
    }

export default PostContainer;