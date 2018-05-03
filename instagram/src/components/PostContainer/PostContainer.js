import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

import { Container, Row, Col } from 'reactstrap';

const PostContainer = ({ posts, handleLike, handleSubmit }) => {
    return (
    <Container>
        <Row>
            <Col xs={{ size: 6, offset: 3 }}>
                {posts.map((post, i) => 
                    <Post 
                        key={i} 
                        id={post.id}
                        username={post.username}
                        thumbnailUrl={post.thumbnailUrl}
                        imageUrl={post.imageUrl}
                        likes={post.likes}
                        timestamp={post.timestamp}
                        comments={post.comments}
                        handleLike={handleLike}
                        handleSubmit={handleSubmit}
                    />
                )}
            </Col>
        </Row>
    </Container>
    )
}

PostContainer.propTypes = {
    posts: PropTypes.array.isRequired,
    handleLike: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default PostContainer;
