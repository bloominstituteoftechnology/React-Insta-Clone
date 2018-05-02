import React from 'react';

// components
import { Image } from '../misc/Image';
import { UserName } from '../misc/UserName';
import { Button } from '../misc/Button';
import { PostComment } from './PostComment';
import { Input } from '../misc/Input';

export const PostContainer = props => {
  console.log(props);
  
     return (
        props.dummyData.map((post, ind) => {
          return (
          <div className="postcontainer">
            <Image
              className='postcontainer__profile-image'
              imgSrc={ post.thumbnailUrl }
            />
            
            <UserName
              className='postcontainer__username'
              userName={ post.username }
            />
            
            <Image
              className='postcontainer__post-image'
                imgSrc={ post.imageUrl }
            />
       
            <Button
              buttonClassName={props.heartPost}
              handleButtonOnClick={props.handleButtonOnClick}
            />
       
            <Button
              buttonClassName={props.commentOnPost}
              handleButtonOnClick={props.handleButtonOnClick}
            />
       
            <div className='postcontainer__likes-container'>
              <span className='postcontainer__likes-container__likes'>
                {post.likes} likes
              </span>
            </div>
       
            <PostComment
              postCommentContainerClassName='postcontainer__comment-container'
              postCommentClassName='postcontainer__comment'
              postCommentData={ post.comments }
            />

            <div className='postcontainer__date-posted__container'>
              <span className='postcontainer__date-posted'>
                { post.timestamp }
              </span>
            </div>

            <Input
              className='postcontainer__new-comment-input'
              name='new-comment-input'
              onChange={props.handleInputValueChange}
              placeholder='Add a comment...'
              value={props.inputValue}
            />

            <Button
              buttonClassName='postcontainer__comment-options'
              handleButtonOnClick={ () => alert('COMMENT OPTIONS') }
              buttonContent='...'
            />
          </div>
          )
        })
  );
};