import React from "react";
import PostContainer from './PostContainer'


const Post = (props) => {
    return (
        <div>
            {
                props.data.map((item, index) => {
                    return <PostContainer key={index} item={item} />
                })
            }
        </div>
    )

}

export default Post
