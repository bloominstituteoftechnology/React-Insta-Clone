

import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
 import PostTop from './Post';


class PostsContainer extends React.Component {
  render() {
    return(
      <>
      {this.props.user.map((user, i) => (
        <div className="post" key={i}>
        <h1 className="header">
        <img src={user.thumbnailUrl}/>
        {user.username}
        </h1>
        <img src={user.imageUrl} />
        <CommentSection user={user} />
        </div>
      ))}
      </>
      )
    }
  };

export default PostsContainer;
