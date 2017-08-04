import React, { Component } from 'react';
import CommentSection from './CommentSection.js';
import { Image, Row, Col, Label } from 'react-bootstrap';

export default class PostsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        this.setState({posts: this.props.posts});
    }
    
    render() {
        return (
            <div>
                {this.state.posts.map((post, i) => {
                    return ( 
                        <div>
                            <Row className="show-grid">
                                <Col md={12}>{
                                    <div>
                                        <div className="user-info">
                                            <Image className="thumb" alt="instagram thumbnail" src={post.thumbnailUrl} circle responsive />
                                        </div>
                                        <div className="user-info">
                                            {post.username}
                                        </div>
                                    </div>   
                                }</Col>
                            </Row>

                            <Row className="show-grid">
                                <Col md={12}>{
                                    <div className="container">
                                        <Image className="photos" alt="instagram" src={post.imageUrl} responsive rounded />
                                    </div>
                                }</Col>
                            </Row>
                            
                            <CommentSection comments={post.comments} />

                            <Row className="show-grid">
                                <Col md={12}>{
                                    <div className="likes">
                                        <Label>{post.likes} Likes</Label>
                                    </div>   
                                }</Col>
                            </Row>
                        </div>
                )})}
            </div>
            )}
    }