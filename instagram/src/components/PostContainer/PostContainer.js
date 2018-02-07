import React from 'react';
import bookmark from './Bookmark.png';
import comment from './comment.png';
import ellipsis from './ellipsis.png';
import heart from './heart.png';

function PostContainer(props) {
  return( 
    <div>
      <div className="head">
        <img src="" />
        <h3>{props.}</h3>
      </div>
      <img src="" />
      <div className="interactions">
        <img src={heart} alt="like post" />
        <img src={comment} alt="comment on post" />
        <img src={bookmark} alt="bookmark this post" />
      </div>
      <CommentSection />
      <h4>Timestamp</h4>
      <div className="addComment">
        <form>
        </form>
        <img src={ellipsis} alt="options" />
      </div>
    </div>
  )
}

export default PostContainer;