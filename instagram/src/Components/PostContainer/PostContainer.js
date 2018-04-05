import React from "react";

const PostContainer = props => {
    return(
        <div className="post">
            {props.data.map(post => (
                <div className="post__individual">
                    <div>
                        <img src={props.thumbnailUrl}/>
                        <div>{post.username}</div>
                    </div>
                    <div>{post.likes}</div>
                </div>
            ))}
        </div>
    )
}

export default PostContainer