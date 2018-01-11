import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css';

const PostContainer = (props) => {
  {if (!props.post.comments) {
    props.post.comments = [{username: "Doesn't look like anything to me"}]
  }}
  let styles;
  {if (props.post.liked) {
    styles = {color: 'red'}
  }}
  return (
    <div key={props.key} className='col-sm-6'>
      <div className='card'>
        <div className='card-header'>
          <img className='img-fluid' src={props.post.thumbnailUrl}></img>
          {props.post.username}
        </div>
        <div>
          <img className='img-fluid' src={props.post.imageUrl}></img>
          Comments {props.post.likes} likes <div><i className="fa fa-heart-o" style={styles} aria-hidden="true" id={props.value} onClick={props.handleLike}></i></div>
          {props.post.comments.map((comment, i) => <CommentSection comment={comment} key={i}/>)}
        </div>
        <form onSubmit={props.handleAddComment} id={props.value}>
          <input placeholder="add comment" onChange={props.handleCommentInputChange}></input>
        </form>
      </div>
    </div>
  )
}

export default PostContainer;
