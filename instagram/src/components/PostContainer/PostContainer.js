import React from 'react';

// components
import { Image } from '../misc/Image';
import { UserName } from '../misc/UserName';
import { Button } from '../misc/Button';

export const PostContainer = props => {
  return(
    <div className="postcontainer">
      <Image
        className='postcontainer__profile-image'
        // imgSrc={ props.imgSrc }
      />

      <UserName
        className='postcontainer__username'
        userName='philzcoffee'
      />

      <Image
        className='postcontainer__post-image'
        // imgSrc={ props.imgSrc }
      />

      <Button
        buttonClassName={ props.heartPost }
        handleButtonOnClick={ props.handleButtonOnClick }
      />

      <Button
        buttonClassName={ props.commentOnPost }
        handleButtonOnClick={ props.handleButtonOnClick }
      />

      <div className='postcontainer__likes-container'>
        <span className='postcontainer__likes-container__likes'>
          { props.postHeartCount } likes
        </span>
      </div>

      
    </div>
  );
};