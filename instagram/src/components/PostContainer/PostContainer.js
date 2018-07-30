import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="posting">
            <div className="posting-header"><img src={props.post.thumbnailUrl} className="thumbnail" width="30" alt="User thumbnail"/>
            {props.post.username}
            </div>
            <div><img src={props.post.imageUrl} alt="Post"/></div>
            <div className="bottom-text">
                <div className="comments-icons"><img src="img/comment-heart.png" alt="Comment heart"/><img src="img/comment-bubble.png" alt="Comment bubble" className="comment-bubble"/></div>
                <div className="likes">{props.post.likes} likes</div>
                
                {props.post.comments.map(comment => <CommentSection comment={comment} key={props.post.timestamp + comment.username} />)}
                <div className="timestamp">{props.post.timestamp}</div>
                <div className="comment-field"><input placeholder="Add a comment..." className="add-comment"/><img src="img/ellipsis.png" alt="ellipsis" className="ellipsis"/></div>
            </div>
        </div>
    );
}

export default PostContainer;
