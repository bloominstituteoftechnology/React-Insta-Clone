import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row} from 'reactstrap';

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

                </CardBody>
            </Card>

        </div>
    );
};

export default Post;