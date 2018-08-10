import React from "react";
import CommentSection from "../../components/CommentSection/CommentSection";
import "./post.css";

const PostContainer = props => {
  return (
    <div className="container">
      {props.posts.map((eachPost, i) => {
        // console.log(eachPost);
        return (
          <div key={i} className="post-border">
            {/* <PostHeader */}

            <div className="postHeader">
              <img src={eachPost.thumbnailUrl} alt="post thumbnail"/>
              <div className="user">{eachPost.username}</div>
            </div>
            {/* /> */}
            <div className="postPic">
              <img
                alt="post thumbnail"
                className="post-image"
                src={eachPost.imageUrl}
              />
            </div>
            {/* <CommentSection comments={eachPost.comments} /> */}
            <CommentSection
              comments={eachPost.comments}
              timestamp={eachPost.timestamp}
              updateCommentField={props.updateCommentField}
              submitNewComment={props.submitNewComment}
              commentField={props.commentField}
            />
          </div>
        );
      })}
    </div>
  );
};


export default PostContainer;
