import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import "../../App.css"






const PostContainer = props => {

  return (

    <div className="postContainer">
      <header className="header">
        <img className="thumbNail" src={props.thumb} alt="thumbnail" />
        <div className="userName">{props.char}</div>
      </header>
      <img className="image" src={props.image} alt="thumbnail" />


      <div className="iconContainer2">
        <a className="button" id="postIcon1" href="./index.html"  onClick={props.postIcon1}></a>
        <a className="button" id="postIcon2"  href="./index.html"  onClick={props.postIcon2}></a>
      </div>
      <div className="likes">{props.likes} likes</div>
      <div> <CommentSection comments={props.comments} /></div>
      <div className="timeStamp">{props.time}</div>
      
      <footer className="addCommentContainer">
        <a className="addComment" type="text"  id="inp1" name="username"  href="./index.html"  onClick={props.addComment} >Add a comment... </a>
        <input className="addComment2" type="text" id="inp2" name="username" value={props.addComment} />
        <a className="button" id="commentDots" href="./index.html"  onClick={props.postIcon1}></a>
      </footer>
    </div>

  )


};


export default PostContainer;