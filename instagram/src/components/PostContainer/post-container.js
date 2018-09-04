import React from 'react';
import './postcontainer.css';
import PropTypes from "prop-types";
import CommentSectionList from '../CommentSection/comment-section-list.js';

function PostContainer(props) {
    return (
	<div className="postcontainer">
          <section className="topbar">
            <img className="thumbnail" alt="thumbnail" src={props.posts.thumbnailUrl}/>
            <p className="username">{props.posts.username}</p>
	  </section>
          <section className="image">
            <img className="mainimage" alt="mainimage" src={props.posts.imageUrl}/>
          </section>
          <section className="icons">
          </section>
          <section className="likes">
            <p className="likes">{props.posts.likes} likes</p>
          </section>
          <section className="comments">
	    <CommentSectionList comments={props.posts.comments}/>
          </section>
	  <p className="timeago">2 HOURS AGO</p>
          <section className="addcomment">
            <div className="bar"></div>
            <input className="addcommentinput" name="" type="text" value={props.inputText} onChange={props.handleInput} placeholder="Add a comment..."/>
	    <button onClick={props.addUser}>Add</button>
          </section>
	</div>
    );
};

PostContainer.propTypes = {
    postcontainer: PropTypes.shape({
	username: PropTypes.string,
	thumbnailUrl: PropTypes.string,
	imageUrl: PropTypes.string,
	likes: PropTypes.number,
	timestamp: PropTypes.string,
	comments: PropTypes.arrayOf(PropTypes.string)
    })
};

export default PostContainer;
