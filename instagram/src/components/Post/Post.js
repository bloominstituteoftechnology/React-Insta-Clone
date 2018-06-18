import React from 'react';
// import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div>
            <img alt="post" src={props.post.imageUrl}/>
            {props.post.comments.map(comment => {
                return <CommentSection key={Math.random()} comment={comment} />
            })}
            <form>
                <input placeholder="Add a comment..." />
            </form>
        </div>  
    )
}

export default Post;