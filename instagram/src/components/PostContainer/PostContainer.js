import React from 'react';
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

export default PostContainer;
