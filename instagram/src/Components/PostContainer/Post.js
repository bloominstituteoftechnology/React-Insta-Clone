import React from 'react';
import { Card, CardImg, CardText, CardBody, CardSubtitle, Row} from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';

const Post = (props) => {
    return (
        <div>
            <Card>
                <Row>
                    <img src={props.post.thumbnailUrl} alt=""/>
                    <CardSubtitle>
                        {props.post.username}
                    </CardSubtitle>
                </Row>
                <CardBody>
                    <CardImg  src ={props.post.imageUrl}/>
                </CardBody>

                <CardBody>
                    <CardText>{`${props.post.likes} likes`}</CardText>
                    <CommentSection comments = {props.post.comments}/>
                </CardBody>
            </Card>

        </div>
    );
};

export default Post;