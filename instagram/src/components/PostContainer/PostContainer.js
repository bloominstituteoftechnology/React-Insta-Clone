import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import CommentSection from '../CommentSection/CommentSection';

import {PostingContainer, PostHeader, PostInteractSection, PostImage} from './PostContainerStyles';

export default function PostContainer({data, addComment, removeComment, addLike, currentUser, id}) {

  const {comments, imageUrl, likes, thumbnailUrl, timestamp, username, likedBy} = data;

  return (

    <PostingContainer>

      <PostHeader>

        <img src={thumbnailUrl} alt='user thumbnail'></img>
        <h3>{username}</h3>

      </PostHeader>

      <PostImage src={imageUrl} alt='post'></PostImage>

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

PostContainer.propTypes = {

  data: PropTypes.object

}
