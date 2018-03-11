import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardSubtitle,
    Row } from 'reactstrap';
import './post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: []
        }
    }

    componentDidMount() {
        this.setState({post: this.props.post, comments: this.props.post.comments});
    }

    render() {
        return (
                <Card >
                    <CardBody>
                        <Row>
                            <img style={{borderRadius: 90}} className='img-thumbnail' src={this.state.post.thumbnailUrl} alt=""/>
                            <CardSubtitle className='cardSubtitle'>{this.state.post.username}</CardSubtitle>

                        </Row>
                    </CardBody>
                        <CardImg className='Post__image' src={this.state.post.imageUrl} alt=""/>
                    <CardBody>
                    <CardText>
                        <i class="icons fas fa-heart fa-2x"></i>
                        <i class="icons far fa-comment fa-2x"></i>
                    </CardText>
                    <CardText>
                        <div>{this.state.post.likes} likes</div>
                    </CardText>
                    <CardText>
                        <CommentSection comments={this.state.comments}/>
                    </CardText>
                    <CardText>
                        <div>{this.state.post.timestamp}</div>
                    </CardText>
                    </CardBody>
                </Card>
        )
    }
}

export default Post;