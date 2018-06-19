import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import CommentInteraction from '../CommentInteraction/CommentInteraction';
import './PostContainer.css';

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
                <CommentInteraction />
                <p align="left">{props.dummyData.likes} likes</p>
                <CommentSection dummyData={props.dummyData.comments} />
            </div>            
        </div>
    )
}
 
export default PostContainer;
