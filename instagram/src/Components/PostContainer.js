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
                        <div>
                        <Post thumbnail={data.thumbnailUrl} image={data.imageUrl} username={data.username}/>
                        <Icons />
                        <p className="likes">377 likes</p>
                        <div className="comments-container">
                        <CommentSection comments={data.comments} key={data.username}/>
                        </div>
                        <p className="time">2 HOURS AGO</p>
                        <Input />
                        </div>
                    )
                })}
            </div>
          
        </div>
    )
}

PostContainer.propTypes = {
    data: PropTypes.array.isRequired
}

export default PostContainer;