import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
  return (
    <article  className="PostContainer"
          id={props.post.username + ': ' + props.post.timestamp}>

      <section className="author">
        <a href="/" className="thumbnail">
          <img  src={props.post.thumbnailUrl}
                alt={props.post.username}/>
        </a>
        <a href="/" className="author-name">
          {props.post.username}
        </a>
      </section>

      <img  src={props.post.imageUrl}
            alt={props.post.username + ': ' + props.post.timestamp}
            className="post-image"/>

      <section className="actions">
        <div  id="like"
              className="sprite-glyph">
        </div>
        <div  id="comment"
              className="sprite-glyph">
        </div>
      </section>

      <a href="/" className="likes">
      {props.post.likes + ' likes'}
      </a>

      <section className="comments">
        {props.post.comments.map(comment =>
          <CommentSection key={comment.username + ': ' + Date.now() + Math.round(Math.random()*1000)}
                          comment={comment} />
          )}
      </section>

      <a href="/" className="time">
        {props.post.timestamp}
      </a>

      <section className="add-comment">
          <form action="/" className="add-comment">
            <textarea name="comment-text"></textarea>
          </form>
      </section>

    </article>
  );
}

export default PostContainer;