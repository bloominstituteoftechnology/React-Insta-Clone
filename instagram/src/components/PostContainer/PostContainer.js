import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import heart from '../CommentSection/love.png';
import comBubble from '../CommentSection/comment.png';

const PostContainer = (props) => {
    return (
        <div>
            <div className="postDiv">
                <div className="logoDiv">
                    <img className="logo" alt="" src={props.thumbnailUrl} />
                </div>
                <div className='username'>
                    {<span><b>{props.username}</b></span>}
                </div>
            </div>
            <img className="mainImage" alt="" src={props.imageUrl} />
            <div>
                <img className="image" alt="" src={heart} />
                <img className="image" alt="" src={comBubble} />
            </div>
            <p className="likes"><b>{props.likes} likes</b></p>
            <CommentSection comments = {props.comments}/>
            <div className="commentDiv">
                <input className="commentInputField" 
                type="text" 
                placeholder="Add a comment..." 
                name="inputField" 
                //value={this.state.search}
            />
        </div>
    </div>
    )
}

export default PostContainer;