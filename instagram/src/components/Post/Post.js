import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css';

const Post = (props) => {
  return (
    <article  className="Post"
          id={props.post.username + ': ' + props.post.timestamp}>

      <section className="author">
        <a href="/" className="thumbnail">
          <img  src={props.post.thumbnailUrl}
                alt={props.post.username}/>
        </a>
        <a href="/" className="username">
          {props.post.username}
        </a>
      </section>

      <img  src={props.post.imageUrl}
            alt={props.post.username + ': ' + props.post.timestamp}
            className="post-image"/>

      <section className="engagement">
        <div className="actions">
          <div  id="like"
                className="sprite-glyph">
          </div>
          <div  id="comment"
                className="sprite-glyph">
          </div>
        </div>

        <a href="/" className="likes">
          {props.post.likes + ' likes'}
        </a>

        <CommentSection comments={props.post.comments} />

        <a href="/" className="time">
          {props.post.timestamp.toUpperCase()}
        </a>

        <div className="respond">
          <form action="/"
                className="add-comment">
            {/* <textarea name="comment-text"
                      placeholder="Add a comment...">
            </textarea> */}
            <div  className="fake-textarea"
                  contentEditable
                  placeholder="Add a comment...">
            </div>
          </form>
          <div  id="options"
                className="sprite-glyph">
          </div>
        </div>
        
      </section>
      
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Post;