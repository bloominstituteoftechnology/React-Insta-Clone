import React from 'react';
import bookmark from './Bookmark.png';
import comment from './comment.png';
import ellipsis from './ellipsis.png';
import heart from './heart.png';
import './PostContainer.css';

function PostContainer(props) {
  return( 
    <div className="main">
      <div className="head">
        <img className='profile' src={props.post.thumbnailUrl} alt="photo of poster" />
        <p className="user">{props.post.username}</p>
      </div>
      <img className='post' src={props.post.imageUrl} alt="post's photo" />
      <div className="interactions">
        <div className='left'>
          <img className='leftInter1'src={heart} alt="like post" />
          <img className='leftInter2'src={comment} alt="comment on post" />
        </div>
        <img className='rightInter'src={bookmark} alt="bookmark this post" />
      </div>
      <p className="NoLikes">{props.post.likes} likes</p>
      {/* <CommentSection /> */}
      <p className='time'>{props.post.timestamp}</p>
      <div className="addComment">
        <form>
        </form>
        <img src={ellipsis} alt="options" />
      </div>
    </div>
  )
}

export default PostContainer;