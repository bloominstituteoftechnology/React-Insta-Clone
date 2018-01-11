import React from 'react';
import './PostContainer.css'
import { Image }  from 'react-bootstrap'
import CommentSection from '../CommentSection/CommentSection';
import likesIcon from './heart_icon.png';
import commentsIcon from './comment_icon.png'

const PostContainer = (props) => {
    return (
        
        <div className="posts-all">
            <div className="posts-individual">
                <div className="posts-header">
                    <img className="posts-thumbnail" src={props.data.thumbnailUrl} alt="user's profile"/>
                    {props.data.username}
                </div>  
                <div>
                    <Image src={props.data.imageUrl} alt="post" className="post-image" responsive/>
                </div>
                <div className="posts-likes">
                    <img src={likesIcon} className="likes-icon" alt="like icon"/>
                    <img src={commentsIcon} className="comments-icon" alt="comments icon"/>
                    <br/>
                    {props.data.likes} {' '} likes
                </div>
                <div className="posts-comments">
                    <CommentSection comments={props.data.comments} data={props.data.timestamp}/>
                </div>
            </div>
        </div>
    );
}

export default PostContainer;