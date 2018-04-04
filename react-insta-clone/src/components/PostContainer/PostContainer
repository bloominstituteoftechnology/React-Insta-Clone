import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection.js'

const headerImgStyles = {
  display: 'flex',
}

const iconStyles = {
  width: '32px',
  height: '32px',
  borderRadius: '16px'
}

const headerStyles = {
  paddingLeft: '20px',
  paddingTop: '5px'
}

const imageStyles = {
  maxWidth: '600px'
}

const likesStyles = {
  display: 'flex',
  justifyContent: 'start',
  paddingLeft: '20px'
}

const PostContainer = props => {
  return (
    <div>
      <div style={headerImgStyles}>
        <img style={iconStyles} src={props.data.thumbnailUrl} />
        <h5 style={headerStyles}>{props.data.username}</h5>
      </div>
      <div>
        <img style={imageStyles} src={props.data.imageUrl} />
      </div>
      <div style={likesStyles}><p>{props.data.likes} Likes</p></div>
      <CommentSection
        change={props.change}
        submit={props.submit}
        comments={props.data.comments}
        value={props.value} />
    </div>
  );
}

export default PostContainer;