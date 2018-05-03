import React from "react";
import heart from "../../heart.svg";
import comment from "../../comment.svg";
//import CommentSection from "../CommentSection/CommentSection.js";

const PostContainer = props => {
    return(
    <div className='post'>
        {props.data.map(post => (
            <div className='postSingle'>
                <div className='postHeader'>
                    <img className="postThumbnail" src={post.thumbnailUrl} alt={post.username}/>
                    <div className ='postUsername'>
                        {post.username}
                    </div>
                </div>
                <div>
                    <img className='postImg' src={post.imageUrl}/>
                </div>
                <div>
                    <div className='postIcons'>
                        <img className='postIcon' src={heart}/>
                        <img className='postIconCom' src= {comment}/>
                    </div>
                    <div className='likes'>
                        {post.likes}Likes
                    </div>
                    
                    time={post.timestamp}/>
                </div>
            </div>
        ))}
    </div>

    )
}

export default PostContainer;