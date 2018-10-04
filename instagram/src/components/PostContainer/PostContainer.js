import React from 'react';
import './postcontainer.css';
import CommentSection from '../CommentSection/CommentSection.js'

const PostContainer = (props)   =>  {
    return(
        <div className="postContainer">
            <div className="postHeader">
                <img src={props.dummyData.thumbnailUrl} />
                {props.dummyData.username}
            </div>
            <img className="postImage" src={props.dummyData.imageUrl} />
            <div className="postButtons">
                <i className="fa fa-heart"></i>
                <i className="fa fa-comment"></i>
            </div>
            <div className="likes">
                {props.dummyData.likes} likes
            </div>
            <CommentSection timestamp={props.dummyData.timestamp} content={props.dummyData.comments}/>
        </div>
    )
}

export default PostContainer;
