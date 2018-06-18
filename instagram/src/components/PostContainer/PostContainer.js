import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    return (
        <div className="post-main">
            <div className="post-header">
                <img src={props.postInfo.thumbnailUrl} alt="thumbnail" />
                <span>{props.postInfo.username}</span>
            </div>
            <img className="post-img" src = {props.postInfo.imageUrl} alt="instagram post" />
            <div className="post-likes">
                <i class="far fa-heart"></i> <i class="far fa-comment"></i> 
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

export default PostContainer;