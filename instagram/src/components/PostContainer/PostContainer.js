import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from "prop-types";
import {Container,Row, Col} from 'reactstrap';
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
    border: 1px solid lightgray;
`;

const User = styled.div`
    padding: 1rem;
    font-weight: 900;
`;

const PostContainer = props => {
    return (
        <ContainerPost className='post-container'>
            {props.post.map((item,i) => {
                return(
                    <Container key={i}>
                        <User><Image src={item.thumbnailUrl} alt ='user thumbnail img'/><Span weight={900}> {item.username}</Span></User>
                        <img className = 'post-img' src={item.imageUrl} alt='Post Img'/>
                        <Row>
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