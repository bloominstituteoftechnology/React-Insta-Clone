import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PostContainer = (props) => {
    return(
        <div className="post-container container">
            {props.posts.map(post => {
                return (
                    <div className="post" key={post.timestamp}>
                        <div className="header row">
                            <div className="col-sm-12 d-flex">
                                <img src={post.thumbnailUrl} alt="thumbnail of user"/>
                                <p className="username">{post.username}</p>
                            </div>
                        </div>
                        <img src={post.imageUrl} alt="user's beautiful post" />
                        <div className="bottom">
                            <div className="likes d-flex">
                                <FontAwesomeIcon icon={['far', 'heart']} className="icon" /><p>{post.likes} likes</p>
                            </div>
                            <CommentSection comments={post.comments} />
                            <p>{post.timestamp}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.object),
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        timestamp: PropTypes.string,
        username: PropTypes.string
    }))
}

export default PostContainer;