import React from 'react';
// import './PostList.css';

const PostList = (props) => {
  return (
    <div>
      {props.postData.map((post) => {
        return (
          <div>
            <div>
              <img src={post.thumbnailUrl} />{post.username}
            </div>
            <div>
              <img src={post.imageUrl} />
            </div>
            <div>
              {/* favicons later */}
              <p>{post.likes} likes</p>
              { post.comments.map((comment) => {
                return <p>{comment.username}: {comment.text}</p>
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostList;