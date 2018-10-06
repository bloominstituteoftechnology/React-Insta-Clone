import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import "../../App.css";
import PropTypes from 'prop-types';

   const PostContainer = props => { 
 
    return (

      <div className="postContainer">
        <header className="header">
          <img className="thumbNail" src={props.thumb} alt="thumbnail" />
          <div className="userName">{props.char}</div>
        </header>
        <img className="image" src={props.image} alt="thumbnail" />


        <div className="iconContainer2">
          <a className="button" id="postIcon1" href="./index.html" onClick={props.postIcon1}></a>
          <a className="button" id="postIcon2" href="./index.html" onClick={props.postIcon2}></a>
        </div>
        <div className="likes">{props.likes} likes</div>
        <div> <CommentSection comments={props.comments} /></div>
        <div className="timeStamp">{props.time}</div>

        <footer className="addCommentContainer">
          <a className="addComment"
            type="text"
            id="inp1"
            name="username"
            href="./index.html"
            onClick={props.postIcon1}
          >Add a comment... </a>
          <form >
            <input
              className={props.type === 'action' ? 'addComment2 visible' : 'addComment2'}
              placeholder="Add comment..."
              type="text"
              id="inp2"
              name="username"
              value={props.value}
              />
           </form>
          <a className="button" id="commentDots" href="./index.html" onClick={props.postIcon1}></a>
        </footer>



      </div>

    )
  }


  PostContainer.propTypes = {
    comments: PropTypes.array.isRequired,
    likes: PropTypes.number.isRequired,
    char: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,

  };


  export default PostContainer;