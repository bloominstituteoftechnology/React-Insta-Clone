import React from 'react';
import like from '../images/like.png';
import comment from '../images/comment.png';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="container postContainer">
            {props.data.map((post, index) => (
                <div className="post" key={post.username + index}>
                    <div className="post-header">
                        <img className="header-image" src={post.thumbnailUrl}/>
                        {post.username}
                    </div>
                    <div className="post-image">
                        <img src={post.imageUrl}/>
                    </div>
                    <div className="post-options">
                        <button><img className="options-post" src={like}/></button>
                        <button><img className="options-post" src={comment}/></button>
                    </div>
                    <div className="post-likes">
                        {`${post.likes} likes`}
                    </div>                    
                    <CommentSection className="post-comments" comments={post.comments} />
                    <div className="timestamp">
                        {/* {`${props.calcTime(post.timestamp)}`} */}
                        {post.timestamp}
                    </div>
                    <div className="newComment">
                        <input className="newComment-input" placeholder="Add a comment..." />
                        <button className="newComment-options">...</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostContainer;