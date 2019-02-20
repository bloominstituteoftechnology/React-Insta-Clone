import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import CommentSection from '../CommentSection/CommentSection';

import {PostingContainer, PostHeader, PostInteractSection, PostImage} from './PostContainerStyles';

export default class PostContainer extends React.Component {

  constructor() {

    super();

    this.state = {

      localLoaded: false

    }

  }

  render() {

    const {data, addComment, removeComment, addLike, currentUser, id} = this.props;

    const {comments, imageUrl, likes, thumbnailUrl, timestamp, username, likedBy, urlIsLocal} = data;

    const localUrl = localStorage['' + imageUrl];

    return (

      <PostingContainer>

        <PostHeader>

          <img src={thumbnailUrl} alt='user thumbnail'></img>
          <h3>{username}</h3>

        </PostHeader>

        {urlIsLocal ? <PostImage src={localUrl} alt='post'></PostImage> : <PostImage src={imageUrl} alt='post'></PostImage>}

        <PostInteractSection>

          <div>

            <p className={likedBy && likedBy.includes(currentUser) ? 'far fa-heart bold' : 'far fa-heart'} onClick={() => addLike(imageUrl)}></p>
            <p className='far fa-comment'></p>

          </div>

          <p>{likes} likes</p>

        </PostInteractSection>

        <CommentSection
          id={id}
          currentUser={currentUser}
          comments={comments}
          time={moment(timestamp, "MMMM Do YYYY hh:mm:ss A").fromNow()}
          removeComment={removeComment}
          addComment={addComment}
        />

      </PostingContainer>

    );

  }

}

PostContainer.propTypes = {

  data: PropTypes.object

}
