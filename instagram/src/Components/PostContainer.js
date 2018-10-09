import React from "react";
import PropTypes from "prop-types";
import CommentSection from "./CommentSection";
import Post from "./Post";
import Icons from "./Icons";
import Input from "./Input"


const PostContainer = props => {
    return (
        <div className="post">
            <div>
                {props.data.map(data => {
                    return (
                        <Post thumbnail={data.thumbnailUrl} image={data.imageUrl} username={data.username}/>
                    )
                })}
            </div>
           <Icons />
           <p className="likes">377 likes</p>
           <div className="comments-container">
            {props.data.map(data => {
                return (
                    <CommentSection comments={data.comments} key={data.username}/>
                )
            })}
            </div>
            <p className="time">2 HOURS AGO</p>
            <Input />
        </div>
    )
}



export default PostContainer;