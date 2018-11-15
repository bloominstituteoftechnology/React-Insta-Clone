import React from 'react';
import CommentContainer from '../CommentsContainer/CommentContainer';

import PropTypes from 'prop-types';
import {PostWrapper, PostItem, PostHeader, PostUserLogo, PostHeadingBold, PostImg} from './PostsStyled';

const Post = props => {




    return (
    <PostWrapper>
        <PostItem>
            <PostHeader>
                <PostUserLogo src={props.postData.thumbnailUrl}></PostUserLogo>
                <PostHeadingBold>{props.postData.username}</PostHeadingBold>
            </PostHeader>
            <PostImg src={props.postData.imageUrl}></PostImg>
            
            <div className="post-comment">
                <CommentContainer comments={props.postData.comments} timestamp={props.postData.timestamp} likes={props.postData.likes} username={props.username}/>
            </div>
            
            
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

  