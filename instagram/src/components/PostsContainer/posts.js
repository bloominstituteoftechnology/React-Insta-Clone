import React from 'react';
import CommentsSection from '../CommentSection/comments';
import "../PostsContainer/poststyle.css";
import heart from "./heart.png";
import comment from "./comment.png";





const Posts  = props => {
  return  (
    <div className="postcont">
      <div className="philz">
        <img src={props.dummyData.thumbnailUrl} alt="user thumbnail"/>
        <p>{props.dummyData.username}</p>
      </div>
      <div className="imgurl">
        <img src={props.dummyData.imageUrl} alt="image"/>
      </div>
      <div className="content">
        <div className="smallerimg">
          <img className="smallimg" src={heart} alt="heart"/>
          <img className="smalling" src={comment} alt="comment"/>

        </div>
        <div className="likes">
        <p>{props.dummyData.likes}</p>
        </div>
        <div className="textcomment">
        <CommentsSection dummyData={props.dummyData.comments} />
        </div>
      </div>
    </div>
  )
}
 
export default Posts 
