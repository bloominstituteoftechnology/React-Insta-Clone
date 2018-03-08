import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


export const PostContainer = (props) => {
  const userPosts = props.post;

  return (
    <div>
        {userPosts.map(post => {
          return (
            <div>
              <div>
                <img src={post.thumbnailUrl} alt="thumbnail"/>
                <div>{post.username}</div>
              </div>
              <img src={post.imageUrl} alt="profileImage"/>
              <div>
                <i className="far fa-heart"></i> <i className="far fa-comment"></i>
              </div>
              <div>Likes: {post.likes}</div>
              {post.comments.map(comment => {
                return (
                  <div>
                    <div>
                      {comment.username} {comment.text}
                    </div>
                  </div>
                );
              })}
              <div>{post.timestamp}</div>
              <CommentSection />
            </div>
          );
        })}
    </div>
  );
}
