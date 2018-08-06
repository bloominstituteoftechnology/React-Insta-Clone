import React from 'react';
import heart from '../../assets/heart.png';
import comment from '../../assets/comment.png';
import options from '../../assets/options.jpg';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const Post = props => {
    return(
        <div>
            {props.posts.map(post => {
                return (
                    <div key={post.username}>
                        <div>
                            <img src={post.thumbnailUrl} alt="User Thumbnail" />
                            <span>{post.username}</span>
                        </div>
                        <img src={post.imageUrl} alt="Shared Post" />
                        <div>
                            <img className="pcImage" src={heart} alt="Heart" />
                            <img className="pcImage" src={comment} alt="Comment" />
                        </div>
                        <p>{post.likes}</p>
                        <CommentSection comments={post.comments} />
                        <p>{post.timestamp}</p>
                        <div>
                            <input placeholder="Add a comment..." />
                            <img className="pcImage" src={options} alt="Comment Options" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Post;