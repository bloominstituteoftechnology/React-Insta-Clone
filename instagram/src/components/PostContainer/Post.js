import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row} from "reactstrap";
import CommentSection from '../CommentSection/CommentSection';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log("here ",this.props);
        return (
          <Card>
                <CardBody>
                    <Row>
                        <img src={this.props.post.thumbnailUrl} alt=""/>
                        <CardTitle> {this.props.post.username} </CardTitle>
                    </Row>
                </CardBody>
                <CardImg src={this.props.post.imageUrl} alt="" />
                <CardBody>
                    <CardText>
                        <div>{this.props.post.likes} likes</div>
                    </CardText>
                    <CardText>
                        {this.props.post
                            ? this.props.post.comments.map(comment => (
                                <CommentSection comment={comment} />
                            ))
                            : null}
                    </CardText>
                    <CardText>
                        <div>{this.props.post.timestamp}</div>
                    </CardText>
                </CardBody>
          </Card>
        );
      };
    }

export default Post;