import React from 'react';
import './postcontainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js'

const PostContainer = (props)   =>  {
    return(
        <div className="postContainer">
            <div className="postHeader">
                <img src={props.thumbnail} alt="User profile"/>
                {props.username}
            </div>
            <img className="postImage" src={props.image} alt="Post"/>
            <div className="postButtons">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </div>
            <div className="likes">
                {props.likes} likes
            </div>
            <CommentSection timestamp={props.timestamp} content={props.comments}/>
        </div>
    )
}

// PostContainer.defaultProps  =   {
//     username: props.username,
//     thumbnail: props.thumbnail,
//     likes: props.likes,
//     timestamp: props.timestamp,
//     comment: props.comments,
//     image: props.image
// }

PostContainer.propTypes =   {
    thumbnail: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired

}

export default PostContainer;
