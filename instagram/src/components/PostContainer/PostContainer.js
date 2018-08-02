import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from "prop-types";
import {Container,Row} from 'reactstrap';
import styled from 'styled-components';
import Span from '../Styles/Styles';

const Image = styled.img`
    border-radius: 200px;
    width: 35px;
    height: 35px;
`;

const ContainerPost = styled.div`
    padding: 1rem;
    max-width: 700px;
    margin: 0 auto;
`;

const PostContainer = props => {
    return (
        <ContainerPost className='post-container'>
            {props.post.map((item,i) => {
                return(
                    <Container key={i}>
                        <Row className='user'><Image className ='thumbnail' src={item.thumbnailUrl} alt ='user thumbnail img'/><Span> {item.username}</Span></Row>
                        <img className = 'post-img' src={item.imageUrl} alt='Post Img'/>
                        <Row className="bottom-section">
                                <CommentSection comments={item.comments}
                                                timestamp={item.timestamp}
                                                likes={item.likes}/>
                        </Row>
                    </Container>
            )})}
        </ContainerPost>
    )
}

PostContainer.proptypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object)
    })
}

export default PostContainer;