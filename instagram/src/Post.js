import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import Comments from './Comments';
import Form from './Form';
import './Post.css';

const PostComponent = (props) => {
 return (<Grid>
            <Row>{ props.data.map((post, index) => {
                    return (<Col xs={6} md={4} key={post.timestamp}>
                        <Thumbnail src={post.imageUrl} alt="242x200">
                            <img className="thumbnail-image" src={post.thumbnailUrl} alt="40x40"/>
                            <h4 className="username">{post.username}</h4>
                            <p>
                                <Button bsStyle="primary">&hearts;</Button>&nbsp;
                            </p>
                            <h5 className="likes">{post.likes} likes</h5> 
                            <Comments comments={post.comments} />
                            <Form id={index} handleCommentSubmit={props.handleCommentSubmit}  />                                       
                        </Thumbnail>
                    </Col>);
                }) }
            </Row>
        </Grid>);
};

export default PostComponent;