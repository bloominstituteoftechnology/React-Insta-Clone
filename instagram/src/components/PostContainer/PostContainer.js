import React, { Component } from 'react';
import './PostContainer.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
    import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {
  return(
    <div className = 'container'>
    <h1> Post </h1>
    <CommentSection/>

    </div>
  )

  }
export default PostContainer
