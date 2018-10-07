import React from "react";
import PropTypes from "prop-types";
import CommentSection from "./CommentSection";
import Post from "./Post";


const PostContainer = props => {
    return (
        <div>
            <div>
                {props.data.map(data => {
                    return (
                        <Post thumbnail={data.thumbnailUrl} image={data.imageUrl} username={data.username}/>
                    )
                })}
            </div>
            {props.data.map(data => {
                return (
                    <CommentSection comments={data.comments} key={data.username}/>
                )
            })}
        </div>
    )
}

export default PostContainer;