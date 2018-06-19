import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './Post.css';
import heart from '../../images/heart.png';
import talk from '../../images/talk.png';

const Post = props => {
    return (
        <div className = "post-container">
            <div className ="header">
                <img className = "thumbnail" src= {props.post.thumbnailUrl} alt = "user thumbnail" />
                <span className = "username">
                {props.post.username}
                </span>
           </div>
           <div>
                <img className = "url" src = {props.post.imageUrl} alt = "user url" />
           </div>
           <div className= "icons">
               <img className ="heart" src = {heart} alt = "heart thumbnail"/>
               <img className ="talk" src = {talk} alt = "talk thumbnail" />
           </div>
           <div className ="likes">
               {props.post.likes} likes
           </div>
           <div>
                <CommentSection comments = {props.post.comments}/>
            </div>
        </div>
    )
}

Post.propTypes = {
    comment: PropTypes.shape ({
        username: PropTypes.string,
        text: PropTypes.string,
    })
}
 
export default Post;