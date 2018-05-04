import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row} from "reactstrap";
import CommentSection from '../CommentSection/CommentSection';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
          <Card className="Post">
                <CardBody>
                    <Row>
                        <img className="Post-userimg" src={this.props.post.thumbnailUrl} alt=""/>
                        <CardTitle className="Post-username"> {this.props.post.username} </CardTitle>
                    </Row>
                </CardBody>
                <CardImg src={this.props.post.imageUrl} alt="" />
                <CardBody>
                    <CardTitle>
                        {this.props.post.likes} likes
                    </CardTitle>
                    <CardBody>
                        {this.props.post
                            ? this.props.post.comments.map((comment, index) => (
                                <CommentSection key={index} comment={comment} />
                            ))
                            : null}
                    </CardBody>
                    <CardText>
                        {this.props.post.timestamp}
                    </CardText>
                </CardBody>
          </Card>
        );
      };
    }

export default Post;