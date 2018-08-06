import React from 'react';
import heart from '../../assets/heart.png';
import comment from '../../assets/comment.png';
import options from '../../assets/options.jpg';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';

const Post = props => {
    return(
        <div className="postContain">
            {props.posts.map(post => {
                return (
                    <div key={post.username}>
                        <div className="usernIcon">
                            <img className="iconThumbnail" src={post.thumbnailUrl} alt="User Thumbnail" />
                            <span><strong>{post.username}</strong></span>
                        </div>
                        <img src={post.imageUrl} alt="Shared Post" />
                        <div className="bottomPost">
                            <div className="postIcons">
                                <img className="pcImage" src={heart} alt="Heart" />
                                <img className="pcImage" src={comment} alt="Comment" />
                            </div>
                            <p className="likes"><strong>{post.likes} likes</strong></p>
                            <CommentSection comments={post.comments} />
                            <p className="timeStamp">{post.timestamp}</p>
                            <div className="bottomInput">
                                <input placeholder="Add a comment..." />
                                <img className="optionsImage" src={options} alt="Comment Options" />
                            </div>
                        </div>
                        <div className="bottom">
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

Post.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string
    }))
}

export default Post;