import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardSubtitle,
    Row
} from 'reactstrap';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    console.log(`PROPS ${props.post}`);
    return (
        <Card className="card-container">
            <CardBody>
                <Row>
                    <img
                        style={{ borderRadius: 90 }}
                        className="img-thumbnail"
                        src={props.post.thumbnailUrl}
                        alt=""
                    />
                    <CardSubtitle className="cardSubtitle">
                        {props.post.username}
                    </CardSubtitle>
                </Row> 
            </CardBody> 
            <CardImg className="Post_image" src={props.post.imageUrl} alt="" />
            <CardBody>
                <CardText>
                    <div className="likes">{props.post.likes} likes </div> 
                    {props.post 
                    ? props.post.comments.map(comment => (
                        <CommentSection comment={comment}/>
                    )) : null}
                  </CardText> 
                <div>
                    <span className="timestamp">{props.post.timestamp}</span> 
                </div>    
            </CardBody> 
        </Card>
    );
};

export default Post;