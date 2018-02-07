import React, { Component } from 'react';
// import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'
import dummyData from '../../dummy-data';
import { Grid, Row, Col } from 'react-bootstrap';

class PostContainer extends Component {
    state = {dummyData}
    render() {
        return (
            <div className="post-container">
                {this.state.dummyData.map(post => {
                    return (
                    <div className="post-container">
                        <div className="username"><img src={post.thumbnailUrl} />{post.username}</div>
                        
                        <div><img src={post.imageUrl} /></div>
                        <div>likes: {post.likes} {post.timestamp}</div>
                        <div className="comment-section">{post.comments.map(comment => {
                            return (
                                <Grid>
                                    <Row>
                                    <Col xs={6} md={4}>
                                        <div className="username">{comment.username}</div>
                                        <div>{comment.text}</div>
                                    </Col>
                                    </Row>
                                </Grid>
                            )
                        })}
                        </div>
                    </div>
                    );
                })}
            </div>
        )
    }
}

export default PostContainer