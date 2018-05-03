import React from 'react';

// components
import { Image } from '../misc/Image';
import { UserName } from '../misc/UserName';
// import { Button } from '../misc/Button';
import { PostComment } from './PostComment';
// import { Input } from '../misc/Input';

// reactstrap components
import {
  Button,
  Card,
  CardImg,
  CardTitle,
  Input,
  InputGroup
 } from 'reactstrap';

export const PostContainer = props => {
     return (
        props.dummyData.map((post, ind) => {
          return (
          <Card className='postcontainer'>
          
          <div className='d-flex postcontainer__user-info-container'>
            <CardImg
              className='mr-3 user-info-container__user-image'
              src={ post.thumbnailUrl }
            />
            
            <CardTitle className='user-info-container__username' >
              {post.username}
            </CardTitle>
          </div>
            
            <CardImg
              className='w-100 postcontainer__post-image'
              src={ post.imageUrl }
            />
       
          <div className='postcontainer__post-interaction-container'>
            <Button
              className="post-interaction-container__heart-post"
              onClick={ props.handleButtonOnClick }
            >
              { `<3` }
            </Button>
       
            <Button
              className="post-interaction-container__comming-on-post"
              onClick={ props.handleButtonOnClick }
            >
              C
            </Button>
          </div>
       
            <div className='postcontainer__likes-container'>
              <span className='font-weight-bold postcontainer__likes-container__likes'>
                {post.likes} likes
              </span>
            </div>
       
            <PostComment
              postCommentContainerClassName='d-flex postcontainer__comment-container'
              postCommentClassName='postcontainer__comment'
              postCommentData={ post.comments }
            />

            <div className='postcontainer__date-posted__container'>
              <span className='postcontainer__date-posted'>
                { post.timestamp }
              </span>
            </div>

            <hr />

            <div className='postcontainer__footer'>
              <InputGroup>
                <Input
                  className='postcontainer__new-comment-input'
                  name='new-comment-input'
                  onChange={props.handleInputValueChange}
                  placeholder='Add a comment...'
                  value={props.inputValue}
                />

                <Button
                  className='postcontainer__comment-options'
                  onClick={ () => alert('COMMENT OPTIONS') }
                >
                  ...
                </Button>
              </InputGroup>
            </div>
          </Card>
          )
        })
  );
};