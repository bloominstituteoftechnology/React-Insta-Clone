import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className="post-main">
            <div className="post-header">
                <img src={props.postInfo.thumbnailUrl} alt="thumbnail" />
                <span>{props.postInfo.username}</span>
            </div>
            <img className="post-img" src = {props.postInfo.imageUrl} alt="instagram post" />
            <div className="post-likes">
                <i className="far fa-heart"></i> <i className="far fa-comment"></i> 
                <div>{props.postInfo.likes}</div>
            </div>
            <CommentSection commentInfo={props.postInfo.comments}/>
            <div> 
                <input type="text"
                        placeholder="Add a comment..."  />
                <button>...</button>
            </div>
        </div>
    
    );
}

PostContainer.propTypes = {
    postInfo: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.object)
    })
};

export default PostContainer;