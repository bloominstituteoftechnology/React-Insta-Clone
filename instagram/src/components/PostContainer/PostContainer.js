import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import { Col, Row, Grid, Image } from 'react-bootstrap';
import './PostContainer.css'

const PostContainer = ({ postData }) => {
    return (
        <div className="post-container">
            <Grid>
                <Row>
                    <Col xs={6} md={6} mdPush={3}>
                        <div className="thumbnail">
                            <Image src={postData.thumbnailUrl} alt="" responsive/>
                            <span><b>{postData.username}</b></span>
                        </div>
                        <div className="image">
                            <Image src={postData.imageUrl} alt="" responsive/>
                        </div>
                        <CommentSection comments={postData.comments} />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}
export default PostContainer;