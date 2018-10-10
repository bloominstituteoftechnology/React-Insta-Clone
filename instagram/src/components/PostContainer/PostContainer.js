import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  console.log(props);
  return (
    <div className="Container">
      <h4>____________</h4>
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
        {/* <img
          className="SearchBar-icons"
          src="https://www.flaticon.com/free-icon/like_149217"
          alt="heart icon"
        />{/* designed by Smashicons
        https://smashicons.com/ from Flaticon */}
        <img className="Icon" src="../../assets/like-heart.png" alt="Heart icon" />
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
            name="addComment"
            type="text"
            placeholder="Add a comment..."
            // onChange={this.handleInputChange}
          />
          <input type="submit" value="Add" />
        </form>
{/* ☞ 8856f45d-bf37-455b-8549-b7a5ef4cecf2 */}

      </div>
    </div>
  );
};
export default PostContainer;
// ☞ 844fa9fb-2a20-4071-aeb5-a620a0d95ebd
