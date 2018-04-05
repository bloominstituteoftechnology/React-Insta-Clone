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

const Post = props => {
    console.log(`PROPS ${props.post}`);
    return (
        <Card>
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
                </Row > 
            </CardBody> 
            <CardImg className="Post_image" src={props.post.imageUrl} alt="" />
            <CardBody>
                <CardText>
                    <div>{props.post.likes} likes </div> 
                </CardText>
                <CardText>
                    <div>{props.post.timestamp}</div> 
                </CardText>    
            </CardBody> 
        </Card>
    );
};

export default Post;