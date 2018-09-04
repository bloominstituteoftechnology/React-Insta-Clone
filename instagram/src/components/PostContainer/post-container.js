import React from 'react';
import './postcontainer.css';
import PropTypes from "prop-types";
import CommentSection from '../CommentSection/comment-section.js';
import CommentSectionList from '../CommentSection/comment-section-list.js';
import SearchBar from '../SearchBar/search-bar.js';

const PostContainer = (props) => {
    return (
	<div class="postcontainer">
          <section class="topbar">
            <img class="thumbnail" alt="thumbnail" src={props.posts.thumbnailUrl}/>
            <p class="username">{props.posts.username}</p>
	  </section>
          <section class="image">
            <img class="mainimage" alt="mainimage" src="{props.posts.imageUrl}"/>
          </section>
          <section class="icons">
          </section>
          <section class="likes">
            <p class="likes">{props.posts.likes} likes</p>
          </section>
          <section class="comments">
	    <CommentSectionList comments={props.posts.comments}/>
          </section>
	  <p class="timeago">2 HOURS AGO</p>
          <section class="addcomment">
            <div class="bar"></div>
            <input class="addcommentinput" name="" type="text" value="" placeholder="Add a comment..."/>
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
	comments: PropTypes.array
    })
};

export default PostContainer;
