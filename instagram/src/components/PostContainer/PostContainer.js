import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
    // console.log(props.postObject.comments);
    return (
        <div className="postContainer">
            <div className="userLine">
                <img className="thumbNail" src={props.postObject.thumbnailUrl} />
                <div className="username">{props.postObject.username}</div>
            </div>
            <img className="postImage" src={props.postObject.imageUrl} />
            <p className="likes">{props.postObject.likes+' likes'}</p>
            <CommentSection commentArray={props.postObject.comments} />
            <form>
                <input value="Add a comment"></input>
            </form>
        </div>
    );
}

export default PostContainer;