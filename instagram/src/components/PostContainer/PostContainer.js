import React from "react";

const PostContainer = props => {
    return(
    <div className='post'>
        {props.data.map(post => {
            <div className='postSingle'>
                <div className='postHeader'>
                    <img className="postThumbnail" src={post.thumbnailUrl} alt={post.username}/>
                </div>
            </div>
        })}
    </div>

    )
}