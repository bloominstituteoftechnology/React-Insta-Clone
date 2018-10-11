import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader'
import PropTypes from "prop-types";
// import './post.css';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    box-shadow: 0 0 0 1px rgba(0,0,0,.05),0 2px 3px 0 rgba(0,0,0,.1);
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 10px;

    img {
        height: 30px;
        border-radius: 50%;
    }
    
    .username {
        padding-left: 10px;
        font-size: 14px;
    }
`;

const InstaImage = styled.div`
    img {
        display: flex;
        width: 100%;
        height: auto;
    }
`;

const Comments = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;
    margin: 10px auto;
    padding: 0px 5px;
`;

const PostContainer = (props) => {
    return (
        <Container>
            <Header>
                <PostHeader thumbnail={props.thumbnail} username={props.username}/>
            </Header>
            <InstaImage>
                <img src={props.image} alt="instagram" />
            </InstaImage>
            <Comments>
                <CommentSection timestamp={props.timestamp} likes={props.likes} comments={props.comments}/>
            </Comments>
        </Container>
    )
}

PostContainer.propTypes = {
    username: PropTypes.string.isRequired,
    likes: PropTypes.number,
    image: PropTypes.image,
    thumbnail: PropTypes.image,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
};

export default PostContainer;

