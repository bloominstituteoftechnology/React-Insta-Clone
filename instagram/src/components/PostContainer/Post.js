import React from 'react';
import CommentContainer from '../CommentsContainer/CommentContainer';

import PropTypes from 'prop-types';
import {PostWrapper, PostItem, PostHeader, UserThumbnail , PostHeadingBold, PostImg, PostComment} from './PostsStyled';

const Post = props => {




    return (
    <PostWrapper>
        <PostItem>
            <PostHeader>
                <UserThumbnail  src={props.postData.thumbnailUrl}></UserThumbnail>
                <PostHeadingBold>{props.postData.username}</PostHeadingBold>
            </PostHeader>
            <PostImg src={props.postData.imageUrl}></PostImg>
            
            <PostComment>
                <CommentContainer comments={props.postData.comments} timestamp={props.postData.timestamp} likes={props.postData.likes} username={props.username}/>
            </PostComment>
            
            
        </PostItem>
    </PostWrapper>
    );
  };

  Post.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array,
  };


  
  export default Post;

  