import React from 'react';
import PropTypes from 'prop-types';
// import './postcontainer.css';
import Styled from 'styled-components';

import Post from './post';
import CommentSection from '../CommentSection/commentsection';

const PostsContainer = Styled.div`
    margin: 100px auto 0 auto;
    max-width: 600px;
`;
const APostContainer = Styled.div`
    background-color: #ffffff;
    border: 1px solid lightgray;
    border-radius: 3px;
    margin-bottom: 50px;
`;

function PostContainer(props) {
    return (
        <PostsContainer>
            {props.posts.map( (postData, index) => {
                return (
                    <APostContainer key={postData.timestamp + '-' + postData.username} >
                        <Post 
                            postData={postData} 
                            handleLikes={props.handleLikes} 
                            index={index} 
                        /> 
                        <CommentSection 
                            timestamp={postData.timestamp} 
                            comments={postData.comments} 
                        />
                    </APostContainer>
                );
            })}
        </PostsContainer>
    );
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string
                })
            )
        })
    ),
    handleLikes: PropTypes.func
}

export default PostContainer;
