import React from 'react';
import './Post.css';

import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row
} from 'reactstrap';

const Post = props => {
    return (
        <div>
            <Card className='post-container'>
                <CardBody>
                    <Row>
                        <img className='post-thumb-img' src={props.data.thumbnailUrl} alt='' />
                        <CardSubtitle className='post-username'><strong>{props.data.username}</strong></CardSubtitle>
                    </Row>
                </CardBody>
                <img width="100%" src={props.data.imageUrl} />
                <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </CardBody>
            </Card>
        </div>
    );
}

export default Post;