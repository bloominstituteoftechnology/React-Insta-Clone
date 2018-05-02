import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

const Post = ({username, thumbnailUrl, imageUrl, likes, timestamp, comments}) => 
    <div>
        <div className="user">
                <div className="thumbnail">{thumbnailUrl}</div>
                <div className="username">{username}</div>
        </div>
        <div className="image">{imageUrl}</div>
        <div className="reaction">
            <div className="action">
                <div className="hearIcon"></div>
                <div className="commentIcon"></div>
            </div>
            <div className="likes">{likes}</div>
            <CommentSection comments={comments} />
            <div className="timestamp">{timestamp}</div>
            <div className="commentBar">
                <input name="comment" type="text" value=""/>
                <div className="moreIcon"></div>
            </div>
        </div>
    </div>
  

export default Post;