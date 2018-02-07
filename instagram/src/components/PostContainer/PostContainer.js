import React from 'react';
import bookmark from './Bookmark.png';
import comment from './comment.png';
import ellipsis from './ellipsis.png';
import heart from './heart.png';

function PostContainer(props) {
  return( 
    <div>
      <div className="head">
        <img src={props.post.thumbnailUrl} alt="photo of poster" />
        <h3>{props.post.username}</h3>
      </div>
      <img src={props.post.imageUrl} alt="post's photo" />
      <div className="interactions">
        <img src={heart} alt="like post" />
        <img src={comment} alt="comment on post" />
        <img src={bookmark} alt="bookmark this post" />
      </div>
      <h4>{props.post.likes} likes</h4>
      {/* <CommentSection /> */}
      <h4>{props.post.timestamp}</h4>
      <div className="addComment">
        <form>
        </form>
        <img src={ellipsis} alt="options" />
      </div>
    </div>
  )
}

export default PostContainer;