import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContent = props => {
  const click = (event) => {
    props.icrmtv(event.target.parentNode.parentNode.value);
}
 const commentSubmit = (event) => {
    event.preventDefault();
    props.adcmt(event);
    event.target.firstChild.value = "";
}
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
        <button className="lkbtn" onClick={click}
          value={props.ixct}>
          <div className="lkbtn-container">
            <img
              src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-68-512.png"
              alt="like"
            />
            </div>
          </button>
          <button className="cmtbtn">
          <div className="cmtbtn-container">
            <img
              src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-69-512.png"
              alt="comment"
            />
            </div>
           </button>
      </div>
      <h4 className="lkct">{props.likes} likes</h4>
      <CommentSection comments={props.comments} />
      <div className="tmstp">
        <span>{props.timestamp}</span>
      </div>
      <form className="frm" onSubmit={commentSubmit} id={props.ixct}>
        <input className="frm-ipt" placeholder="Add a comment..." />
      </form>
    </div>
  );
};

export default PostContent;
