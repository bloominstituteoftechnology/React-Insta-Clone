import React, { Component } from 'react';
import './posts.css';
import { Comments } from '../CommentSection/CommentSection';
import { dummyData } from '../../dummy-data';

export const PostList = (props) => {
  return (
    <div id="centeruser">
      {props.dummyData.map((iguser => {
        return (
        <div id='one' key={iguser.username}>
              <h4>{iguser.username}</h4>
              <img id ='img'src={iguser.imageUrl}/>
              <h5 id ='two'>{iguser.likes} likes</h5>
              <Comments dummyData={dummyData} />
        </div>
          );
      }))}
    </div>
  )
  };