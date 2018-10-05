import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import "../../App.css"

const PostContainer = props => {

  return (

    <div className="postContainer">
      <header className="header">
        <img className="thumbNail" src={props.thumb} />
        <div className="userName">{props.char}</div>
      </header>
      <img className="image" src={props.image} />

       
      <div className="iconContainer2">
        <div className="postIcon1" onClick={props.postIcon1}></div>
        <div className="postIcon2" onClick={props.postIcon2}></div>
      </div>
      <div className="likes">{props.likes} likes</div>
      <div className="commentContainer">comments go here</div>
      <div className="timeStamp">{props.time}</div>
      <footer className="addCommentContainer">
        <input className="addComment" type="text" value={props.addComment} />
        <div className="dots" onClick={props.dots}>...</div>
      </footer>




      <CommentSection /></div>

  )

 
};

export default PostContainer;