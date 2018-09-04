import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';

// PostContainer.propTypes = {


// };

const PostContainer = props => {
    // console.log(props.postObject.comments);
    return (
        <div className="postContainer">
            <div className="userLine">
                <img className="thumbNail" src={props.postObject.thumbnailUrl} alt="user-thumbnail" />
                <div className="username">{props.postObject.username}</div>
            </div>
            <img className="postImage" src={props.postObject.imageUrl} alt=""/>
            <p className="likes">{props.postObject.likes+' likes'}</p>
            <CommentSection commentArray={props.postObject.comments} addNewComment={props.addNewComment}/>
           
        </div>
    );
}

export default PostContainer;