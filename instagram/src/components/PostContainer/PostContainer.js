import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = (props) => {
    return (
        <div className="postDiv">
            <div className="logoDiv">
                <img className="logo" alt="" src={props.thumbnailUrl} />
            </div>
            {/* <span><b>{this.state.user}</b></span> */}
            <img className="mainImage" alt="" src={props.imageUrl} />
            <CommentSection comments={props.comments}/>
        </div>
    )
}

export default PostContainer;