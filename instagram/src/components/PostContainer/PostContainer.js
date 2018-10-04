import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import "../../App.css"

const PostContainer = props => {

  return (

    <div className="postContainer">
      <header className="header">
        <div className="thumbNail">thumbNail</div>
        <div className="userName">userName</div>
      </header>
      <div className="image">pic placeholder</div>
      <div className="iconContainer2">
        <div className="postIcon1" onClick={props.postIcon1}></div>
        <div className="postIcon2" onClick={props.postIcon2}></div>
      </div>
      <div className="commentContainer">comments go here</div>
      <div className="timeStamp">2 hours ago</div>
      <footer className="addCommentContainer">
        <input className="addComment" type="text" value={props.addComment} />
        <div className="dots" onClick={props.dots}>...</div>
      </footer>







      <CommentSection /></div>

  )

  /*  return props.list.map((item, id) => (
     <li
       onClick={() => props.toggleComplete(item.id)}
       )); */
};

export default PostContainer;