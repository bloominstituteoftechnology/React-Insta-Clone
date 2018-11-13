import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentsContainer = styled.div`
    width: 100%;
`

const CommentSection = (props) => {
    return (
        <CommentsContainer>
            {props.thisPost.comments.map((comment,index) => {
                return <Comment thisComment={comment} key={index} />
            })}
        </CommentsContainer>
    );
}

CommentSection.propTypes = {
    thisPost: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes:  PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.object).isRequired
    })
}

export default CommentSection;