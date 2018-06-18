import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="post-container">
            <div className="post-header">
                <div><img src={props.thumbnailUrl} alt="post logo"/></div>
                <div>{props.username}</div>
            </div>
            <div><img src={props.imageUrl} alt="post png"/></div>
            <div>{props.likes}</div>
            <div>{props.comments.map(comment => {
                return (
                    <CommentSection
                        username={comment.username}
                        text={comment.text}
                    />
                );
            })}
            </div>
            <div>{props.timestamp}</div>
        </div>
    );
};

export default PostContainer;