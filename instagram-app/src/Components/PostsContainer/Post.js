import React from 'react';
import PostTop from './PostTop';
import CommentSection from '../CommentSection/CommentSection';
 
const Post = props => {
    return(
        <div className="post-body">
        <PostTop 
        user={props.user}
        username={props.user.username}
        thumbnailURL={props.user.thumbnailURL}
        />
        <div className="post-img">
        <img src={props.user.imageURL}/>
        </div>
        <div>
            <CommentSection comments={props.user.comments} />
        </div>
        </div>
    )
}

export default Post;