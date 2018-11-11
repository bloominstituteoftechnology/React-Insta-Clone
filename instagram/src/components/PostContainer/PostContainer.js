import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostFooter from './PostFooter';
import CommentsContainer from "../CommentsContainer/CommentsContainer";

import './PostContainer.css';


export default class PostContainer extends React.Component {
  render() {

    return (
      <div className = 'post-container' >
        {this.props.data.map( el => {
          return (
            <div className="each-post-container" key={el.timestamp}>
              <PostHeader name={el.username} thumbNail={el.thumbnailUrl} />
              <PostImage image={el.imageUrl} />
              <PostFooter likes={el.likes} />
              <CommentsContainer comments={el.comments} />

            </div>
          )
        })}

      </div>
    )
  }
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};
