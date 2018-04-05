import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = (props) => {
    return (
        <div className="postDiv">
            <div className="logoDiv">
                <img className="logo" src={props.thumbnailUrl} />
            </div>
            {/* <span><b>{this.state.user}</b></span> */}
            <br />
            <img className="mainImage" src={props.imageUrl} />
            <CommentSection comments={props.comments}/>
        </div>
    )
}

export default PostContainer;