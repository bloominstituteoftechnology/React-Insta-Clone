import React from 'react';
import Post from './Post';
import Icons from './Icons';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
  if (!props.data.length) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="post">
      <div>
        {props.data.map(data => {
          return (
            <div key={data.timestamp}>
              <Post
                thumbnail={data.thumbnailUrl}
                image={data.imageUrl}
                username={data.username}
              />
              <Icons increment={props.increment} />
              <p className="likes"> {props.likes} likes</p>
              <div className="comments-container">
                <CommentSection comments={data.comments} />
              </div>
              <p className="time">2 HOURS AGO</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};


PostContainer.propTypes = {
  data: PropTypes.array.isRequired
};

export default PostContainer;