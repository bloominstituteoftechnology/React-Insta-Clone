import React from "react";

import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
// import icons from the font-awesome library
import FontAwesomeIcon from "react-fontawesome";
// "font-awesome": "^4.7.0",
// "react-fontawesome": "^1.6.1",
const PostContainer = props => {
  console.log(props);
  return (
    <div className="Container">
      <span className="Separator">
        <h4>____________</h4>
      </span>
      <div className="Post-user-row">
        <span>
          <img
            className="Post-thumbnail"
            src={props.thumbnailUrl}
            alt="user thumbnail"
            // width={30}
            // height={30}
          />
        </span>
        <span>{props.username}</span>
      </div>
      <div className="Post-image-container">
        <img className="Post-image" src={props.imageUrl} alt="Post image" />
        {/* or use class name in css */}
      </div>
      <div className="Icon-row">
        {/* // look for the heart and comment  icons.  */}
        {/* <FontAwesomeIcon icon={["far", "heart"]} onClick={this.addALike} />{" "}
         <FontAwesomeIcon icon={["far", "comment"]} /> */}
        {/* <img
          className="SearchBar-icons"
          src="https://www.flaticon.com/free-icon/like_149217"
          alt="heart icon"
        />{/* designed by Smashicons
        https://smashicons.com/ from Flaticon */}
        {/* // import icons directly from a local fa. */}
        <span className="Icon-row">
          <img
            className="Icon-heart"
            src={require("./like-heart.png")}
            alt="Heart icon"
          />
          <img
            className="Icon-comment"
            src={require("./comment.png")}
            alt="Comment icon"
          />
        </span>
      </div>
      <div className="Stats-row">{props.likes} likes</div>
      <div className="Comments">
        <CommentSection commentProps={props.comments} />
      </div>
      <div className="Timestamp">{props.timestamp}</div>
      <div>
        <form className="AddComment">
          <input
            className="commentInput"
            // name="newCommentList"
            name="addComment"
            type="text"
            // value= {name}
            placeholder="Add a comment..."
            // onChange={alert('hello world')} // submit test works
            onChange={props.newCommentList} //calls handleInputChange
          />
          <input type="submit"  />
        </form>
        {/* ☞ 8856f45d-bf37-455b-8549-b7a5ef4cecf2 */}
      </div>
    </div>
  );
};
export default PostContainer;
// ☞ 844fa9fb-2a20-4071-aeb5-a620a0d95ebd
