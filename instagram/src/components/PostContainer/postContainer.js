import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import CommentSection from '../CommentSection/commentSection';

const PostContainer = props => {
  return (
    <div className="posts_container">
      {props.posts.map((post, index) => (
        <Card className="post" key={`${post.username} ${post.timestamp}`}>
          <CardTitle className="post_userTitle">
            <img className="post_userThumbnail" src={post.thumbnailUrl} alt="User thumbnailt"/>
            <div className="post_userName">{post.username}</div>
          </CardTitle>
          <CardImg className="post_image" src={post.imageUrl} alt="Card image cap" />
          <CardBody>
            <CommentSection post={post}/>
          </CardBody>
        </Card>
        
    ))}
    </div>
  )
}

export default PostContainer;