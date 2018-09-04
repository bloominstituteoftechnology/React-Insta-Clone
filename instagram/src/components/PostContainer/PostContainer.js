import React from 'react';
import './PostContainer.css';
import PropTypes from "prop-types";
import CommentSection from '../CommentSection/CommentSection.js';
import SearchBar from '../SearchBar/SearchBar.js';

const PostContainer = (props) => {
    return (
	     <div class = 'post-container'>
          <section class = 'top-bar'>
            <img class = 'thumbnail' alt = 'Thumbnail Image' src = {props.posts.thumbnailUrl}/>
            <p class = 'username'>{props.posts.username}</p>
	        </section>

          <section class = 'image'>
            <img class = 'img-main' alt = 'Main Image' src = {props.posts.imageUrl}/>
          </section>

          <section class = 'icons'>
          </section>

          <section class = 'likes'>
            <p class = 'likes'>{props.posts.likes} likes</p>
          </section>

          <section class="comments">

          </section>
	  <p class = 'timeago'>2 HOURS AGO</p>
          <section class = 'addcomment'>
            <div class = 'comment-bar'></div>
            <input class = 'comment-input' name = '' type = 'text' value = '' placeholder = 'Add a comment...'/>
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
