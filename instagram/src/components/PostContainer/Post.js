import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function Post(props) {
    return (
        <div className="PostContainerDiv">
            <div className="PostUser">
                <img src={props.postProps.thumbnailUrl} alt="" />
                <h2>{props.postProps.username}</h2>
            </div>
            <img src={props.postProps.imageUrl} alt="" />
            <div className="Icons">{props.postProps.likes} likes</div>
            
            <CommentSection comments={props.postProps.comments} />
        </div>
    )
}

export default Post;