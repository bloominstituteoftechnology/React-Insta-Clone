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
        <a className="button" id="postIcon1" href="#" onClick={props.postIcon1}></a>
        <a className="button" id="postIcon2"  href="#" onClick={props.postIcon2}></a>
      </div>
      <div className="likes">{props.likes} likes</div>
      <div> <CommentSection comments={props.comments} /></div>
      <div className="timeStamp">{props.time}</div>
      <footer className="addCommentContainer">
        <input className="addComment" type="text" value={props.addComment} />
        <div className="dots" onClick={props.dots}>...</div>
      </footer>
    </div>

  )


};

export default PostContainer;