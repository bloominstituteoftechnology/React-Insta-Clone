import React from 'react';
import './PostContainer.css';
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';

import CommentSection from '../CommentSection/CommentSection.js';


const PostContainer = (props) => {
    console.log("test", props.comments)
       return (
            <div className="post-container">
                                    <Card className="container">
                                        <CardBody>
                                            <CardTitle>{props.username}</CardTitle>
                                            <CardText>{props.timestamp}</CardText>
                                            <CardImg src={props.imageUrl} className="post-img" />
                                            <CommentSection comments={props} />
                                        </CardBody>
                                    </Card>
                                </div> 
        )
    }

export default PostContainer;
