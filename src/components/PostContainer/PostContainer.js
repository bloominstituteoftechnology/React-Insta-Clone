import React from 'react';
import CommentSection from '/Users/samar/Documents/js/lambdaschool/course/React-Insta-Clone/src/components/CommentSection/CommentSection.js'
import { Card, CardBody, CardImg, Container, Row,Col, CardSubtitle, CardText } from 'reactstrap';
import './PostContainer.css';

const PostContainer = props => { 
    return(
        <div>
            {console.log(props)}
            <Row>
                <Col sm="8" md={{ size: 8, offset: 2 }}>
                <img
                style={{ borderRadius: 90 }}
                className="img-thumbnail"
                src={props.boo.thumbnailUrl}
                alt=""
                />
                </Col>
                <Col sm="4" md={{ size: 8, offset: 2 }}>
                <CardSubtitle className="cardSubtitle">
                    {props.boo.username}
                </CardSubtitle>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                <Card>
                    <CardImg className="Post__image" src={props.boo.imageUrl} alt="Card image cap" />
                </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                <card>
                    <CardBody>
                        <CardText>
                            <CommentSection key={props.boo.timestamp} boo={props.boo.comments} />
                        </CardText>
                    </CardBody>
               </card>
                </Col>
            </Row>
        </div>
    //     {{/* <div className="row justify-content-center">
    //     <div className="col-4 d-flex">
    //         <Card>
    //             <CardImg  src="https://loremflickr.com/320/240" alt="Card image cap" />
    //         {/* ask about props.boo . why boo? */}
    //         </Card>
    //     </div>
    // </div>
    // <div className="row justify-content-center">
    //     <div className="col-4 d-flex">
    //     <card>
    //         <CardBody>
    //             <CommentSection key={props.boo.timestamp} boo={props.boo.comments} />
    //         </CardBody>
    //     </card>
    //     </div>
    // </div> */}}
    );
}


export default PostContainer;
