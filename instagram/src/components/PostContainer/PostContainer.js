import React, { Component } from 'react';
import './PostContainer.css';
import { CommentSection } from '../CommentSection/CommentSection';
import { dummyData } from '../../dummy-data';

export const PostContainer = ({ dummyData }) => {
  return (
    <div className="post-container">
        <div className="thumbnail">
            <img className="thumbnail-img" src={dummyData.thumbnailUrl} />
            <span><b>{dummyData.username}</b></span>
        </div>
        <div className="image">
            <img className="image-img" src={dummyData.imageUrl} />
        </div>
              <CommentSection comments={dummyData.comments} />
    </div>
  )
  };