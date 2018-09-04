import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import DynamicInput from "../DynamicInput/DynamicInput";

const PostContent = props => {
  return (
    <div className="postcontent-container">
      <div className="pfimg">
        <img src={props.thumbnailUrl} alt="user" />
      </div>
      <span className="unt">
        <strong>{props.username}</strong>
      </span>
      <div className="pstimg">
        <img src={props.imageUrl} alt="image" />
      </div>
      <div className="itractns">
        <img
          src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-68-512.png"
          alt="like"
        />
        <img
          src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-69-512.png"
          alt="comment"
        />
      </div>
      <h4 className="lkct">{props.likes} likes</h4>
      <CommentSection comments={props.comments} />
      <div className="tmstp">
        <span>{props.timestamp}</span>
      </div>
      <DynamicInput
        inputName="adusr"
        textOnProps={props.textOnProps}
        handleInputOnProps={props.handleInputOnProps}
      />
      <DynamicInput
        inputName="adtxt"
        textOnProps={props.textOnProps}
        handleInputOnProps={props.handleInputOnProps}
      />
      <button className="btn" onClick={props.clickSubmitComment}>
        Add Comment
      </button>
    </div>
  );
};

export default PostContent;
