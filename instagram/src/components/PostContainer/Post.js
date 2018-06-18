import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {    
      return (
      <div className="App-intro" key={props.post.id}>
        <img src={props.post.thumbnailUrl} />
        {props.post.username}
        <img src={props.post.imageUrl} />
        Likes: {props.post.likes}
      </div> 
    );
};

Post.propTypes = {
    id: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
}

export default Post;