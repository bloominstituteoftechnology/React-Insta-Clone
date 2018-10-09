import React from "react";
import PropTypes from "prop-types";
import CommentSection from "./CommentSection";
import Post from "./Post";
import Icons from "./Icons";


const PostContainer = props => {
    if (!props.data.length) {
        return <h1>Loading ...</h1>
     }
    return (
        <div className="post">
            <div>
                {props.data.map((data, index) => {
                    return (
                        <div key={index}>
                        <Post thumbnail={data.thumbnailUrl} image={data.imageUrl} username={data.username}/>
                        <Icons />
                        <p className="likes">377 likes</p>
                        <div className="comments-container">
                        <CommentSection comments={data.comments} />
                        </div>
                        <p className="time">2 HOURS AGO</p>
                    
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