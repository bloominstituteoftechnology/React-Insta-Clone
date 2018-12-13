import React from "react";

//map over posts and render
const PostContainer = props => {
    return (
        <div className = "post-container">
            {props.posts.map (p=> <Post key={p.imageUrl} post ={p} />)}
        </div>
    )
}



export default PostContainer