import React from 'react';
import moment from 'moment';
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
            <p className="timestamp"><b>{moment(props.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</b></p>
            <div className="commentDiv">
                <input className="commentInputField"
                type="text"
                placeholder="Add a comment..."
                name="inputField"
            />
        </div>
    </div>
    )
}

export default PostContainer;