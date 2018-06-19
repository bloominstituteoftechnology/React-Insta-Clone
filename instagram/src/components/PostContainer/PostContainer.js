import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className="custom-post">
            <div className="post-header">
                <img src={props.dummyData.thumbnailUrl} alt="user thumbnail"/>
                <p>{props.dummyData.username}</p>
            </div>
            <div className="post-img">
                <img src={props.dummyData.imageUrl} alt="post content"/>
            </div>
            <div className="post-comments">
                <div className="comment-interaction">
                    <i className="fa">&#xf08a;</i>
                    <i className="fa">&#xf0e5;</i>
                </div>
                <p align="left">{props.dummyData.likes} likes</p>
                <CommentSection dummyData={props.dummyData.comments} />
            </div>            
        </div>
    )
}

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            thumnailUrl: PropTypes.string,
            username: PropTypes.string,
            imageURL: PropTypes.string,
            likes: PropTypes.number
        })
    )
};

 
export default PostContainer;
