import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {

  render() {
    return (
      <div className="post-container">
        <div className="post">
          <p>
            <img className="post-thumb" src={this.props.post.thumbnailUrl} alt="user avatar" />
            {this.props.post.username}
          </p>
          <img className="post-img" src={this.props.post.imageUrl} alt="post topic" />
          <div className='like-symbol'>
            <span className="far fa-heart"></span>
            <span className="far fa-comment fa-flip-horizontal"></span>
          </div>
          <div className='like-count'>
            {this.props.post.likes} likes
          </div>
        </div>
        <CommentSection comments={this.props.post.comments}
          ts={this.props.post.timestamp} />
      </div>
    );
  }
}


PostContainer.propTypes = {
  post: PropTypes.string.isRequired
};

/*
  {
    username: "philzcoffee",
    thumbnailUrl:
      "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

    imageUrl:
      "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
    likes: 400,
    timestamp: "July 17th 2017, 12:42:40 pm",
    comments: [
      {
        username: "philzcoffee",
        text:
          "We've got more than just delicious coffees to offer at our shops!"
      },
      {
        username: "biancasaurus",
        text: "Looks delicious!"
      },
      {
        username: "martinseludo",
        text: "Can't wait to try it!"
      }
    ]
  }
*/

export default PostContainer;
